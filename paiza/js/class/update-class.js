/*
クラスの学級委員である paiza 君は、クラスのみんなに次のような形式でアカウントの情報を送ってもらうよう依頼しました。

名前 年齢 誕生日 出身地

送ってもらったデータを使いやすいように整理したいと思った paiza 君はクラス全員分のデータを次の形式でまとめることにしました。

User{
    nickname : 名前
    old : 年齢
    birth : 誕生日
    state : 出身地
}


途中で名前が変わった際にいちいちデータを修正するのが面倒だと思ったあなたは、生徒の構造体と新しい名前を受け取り、その名前を修正する関数 changeName を作成し、それを用いて生徒の名前を更新することにしました。

クラスの人数と全員の情報、更新についての情報が与えられるので、入力に従って名前を更新した後のクラスのメンバーの情報を出力してください。
▼　下記解答欄にコードを記入してみよう

入力される値
N K
n_1 o_1 b_1 s_1
...
n_N o_N b_N s_N
a_1 nn_1
...
a_K nn_K


・ 1 行目では、paiza君のクラスの人数 N と名前更新の回数 K が与えられます。
・ 続く N 行のうち i 行目 (1 ≦ i ≦ N) では、 i 番の生徒の名前・年齢・誕生日・出身地を表す整数・文字列 n_i ,o_i ,b_i , s_i が順に半角スペース区切りで与えられます。
・ 続く K 行では、名前を更新する生徒の番号 a_i と、その人の新しい名前 nn_i が空白区切りで与えられます。

入力値最終行の末尾に改行が１つ入ります。
文字列は標準入力から渡されます。 標準入力からの値取得方法はこちらをご確認ください
期待する出力
n_1 o_1 b_1 s_1
...
n_N o_N b_N s_N


名前の更新を全て終えた後の各クラスメートの情報を生徒番号の小さい順に入力と同様の形式でまとめたものを出力してください。
条件
・ 1 ≦ N , K ≦ 10
・ n_i , b_i , nn_i (1 ≦ i ≦ N) は 1 文字以上 20 文字以下の文字列
・ b_i (1 ≦ i ≦ N) はMM/DD 形式の文字列（例 1月2日 → 01/02 12月31日 → 12/31)
・ 1 ≦ o_i ≦ 100
・ 1 ≦ a_i ≦ N (1 ≦ i ≦ K)

入力例1
1 1
koko 23 04/10 tokyo
1 nana

出力例1
nana 23 04/10 tokyo

入力例2
3 2
mako 13 08/08 nara
taisei 16 12/04 nagano
megumi 14 11/02 saitama
2 taihei
3 megu

出力例2
mako 13 08/08 nara
taihei 16 12/04 nagano
megu 14 11/02 saitama
*/


/*
・更新時のindexに注意
*/

process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
});

class User {
    constructor(nickname, old, birth, state) {
        this.nickname = nickname;
        this.old = old;
        this.birth = birth;
        this.state = state;
    }

    setNickName(newName) {
        this.nickname = newName;
    }

    toString() {
        return `${this.nickname} ${this.old} ${this.birth} ${this.state}`;
    }
}

reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {
  const [N, K] = lines[0].split(' ').map(Number);
  const users = [];

  // ユーザー情報の読み込み
  for (let i = 1; i <= N; i++) {
    const [nickname, old, birth, state] = lines[i].split(' ');
    users.push(new User(nickname, old, birth, state));
  }

  // 名前の更新処理
  for (let i = 1; i <= K; i++) {
    const [updateUserIndex, newName] = lines[N + i].split(' ');
    const index = parseInt(updateUserIndex, 10) - 1; // インデックスを0ベースに調整
    users[index].setNickName(newName);
  }

  // 結果の出力
  users.forEach(user => {
    console.log(user.toString());
  });
});
