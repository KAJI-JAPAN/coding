
### 【コーディング問題】装備アイテムの攻撃力計算システムの改善

以下の `Equipment` クラスと `PowerUpService` クラスには、ソース資料で指摘されている「悪いコード」のパターンがいくつか含まれています。

#### 1. 悪いコード（現在の実装）

```java
class AttackPower {
    int value; // 可変（ミュータブル）な変数

    AttackPower(int value) {
        this.value = value;
    }

    // 副作用：自分自身の状態を書き換えてしまう
    void upgrade(int amount) {
        this.value += amount;
    }
}

class PowerUpService {
    // 悪い例：再代入と副作用が含まれるメソッド
    int calculateFinalPower(AttackPower basePower, int multiplier, int bonus) {
        int tmp = basePower.value; // tmpの使い回し開始

        // 1. 倍率をかける
        tmp = tmp * multiplier;

        // 2. ボーナスを加算する
        tmp = tmp + bonus;

        // 3. 元のインスタンスの状態まで変えてしまう（副作用）
        basePower.upgrade(tmp);

        return tmp;
    }
}
```

#### 2. 問題：以下の3点を修正してください

1.  **再代入の排除:** `calculateFinalPower` メソッド内の変数 `tmp` の使い回しをやめ、`final` 修飾子を用いた個別の不変なローカル変数に分割してください。
2.  **副作用の排除:** `AttackPower` クラスを不変（イミュータブル）に設計し直してください。具体的には、`value` を `final` にし、値を変更する際は新しいインスタンスを生成して返すようにします。
3.  **予測可能な設計:** `PowerUpService` が引数で受け取ったオブジェクトの状態を直接書き換えないように修正してください。

---

### 【解答例と解説】

#### 修正後の良いコード

```java
// 1. 不変なクラスへの変更
class AttackPower {
    final int value; // finalを付与して不変にする

    AttackPower(final int value) {
        if (value < 0) throw new IllegalArgumentException();
        this.value = value;
    }

    // 副作用をなくし、新しいインスタンスを返す
    AttackPower upgrade(final AttackPower amount) {
        return new AttackPower(this.value + amount.value);
    }
}

class PowerUpService {
    // 2. 再代入を排除し、副作用のないメソッドへ
    AttackPower calculateFinalPower(final AttackPower basePower, final int multiplier, final int bonus) {
        // 個別の不変なローカル変数を用意する
        final int multipliedPower = basePower.value * multiplier;
        final int totalPowerValue = multipliedPower + bonus;

        // 元のbasePowerは変更せず、新しい状態を戻り値として扱う
        return new AttackPower(totalPowerValue);
    }
}
```

#### 解説：なぜこれが「良いコード」なのか

*   **変数の意味が明確になる:** `tmp` を使い回さず `multipliedPower` などの名前を付けることで、コードの可読性が向上し、バグの混入を防げます。
*   **副作用がなく予測可能:** メソッドが外部の状態（引数の `basePower`）を勝手に書き換えないため、どこで値が変わったのかを追いかける必要がなくなり、挙動が安定します。
*   **マルチスレッドでも安全:** インスタンスが不変であれば、複数の処理から同時に参照されても、一方が値を書き換えてもう一方に影響を与えるといった予期せぬ動作が発生しません。

このように、**「デフォルトを不変にする」**設計思想を取り入れることで、保守しやすく成長し続けるコードを実現できます。