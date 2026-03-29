---

### 【Rubyコーディング問題】キャラクターの攻撃力計算システムの改善

以下のコードは、ゲームの攻撃力を管理するクラスと計算ロジックです。ソース資料で「悪魔」と呼ばれている**再代入**や**副作用**の問題が含まれています,。

#### 1. 悪いコード（現状の実装）

```ruby
class AttackPower
  attr_accessor :value # 可変（ミュータブル）な属性

  def initialize(value)
    @value = value
  end

  # 副作用：自身の状態を直接書き換えてしまう
  def upgrade(amount)
    @value += amount
  end
end

def calculate_total_damage(base_power, multiplier, bonus)20260328.rb
  # 悪い例：変数 tmp の使い回し（再代入）
  tmp = base_power.value

  # 1. 倍率計算
  tmp = tmp * multiplier

  # 2. ボーナス加算
  tmp = tmp + bonus

  # 3. 引数で渡された元のオブジェクトを書き換えてしまう（副作用）
