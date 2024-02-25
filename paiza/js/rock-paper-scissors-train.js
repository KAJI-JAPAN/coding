// https://paiza.jp/works/challenges/704/page/result

/* 
入力値

N：園児の人数　M：勝敗記録（じゃんけん回数）
n回目のじゃんけん：　x_i の園児がy_i 	の園児に買った

5 4

1 3

4 5

2 4

..

上記の場合

5：園児の人数　4：勝敗記録（じゃんけん回数）

1が3に勝った

4が5に勝った

2が4に勝った

下記の例のように勝った人の列がどんどん伸びて一番数が多い人が勝ちのゲーム

一番数の多かった人が何番かを出力する
*/

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const [numberPeople, winNumber] = lines[0].split(' ').map(Number)
  // 参加者を作成
    const peoples = []
    for(let i=0; i <= numberPeople; i++) {
        peoples.push([i + 1])
    }

 // じゃんけんで買った園児に取り込まれる
for(let i=1; i <= winNumber; i++) {
    const winCheck = lines[i].split(' ').map(Number)
    const win = winCheck[0] - 1
    const lose = winCheck[1] - 1
    //  負けた園児を買った園児に統合
    peoples[lose].forEach(p => peoples[win].push(p) )
    peoples[lose] = []
    }
//  一番数が多い人を抽出
    const winnerPeople = peoples.reduce((max, curr) => {
        return Math.max(max, curr.length)
    }, 0)
    
    const checkWinnerPeopoles = peoples.filter(p => p.length === winnerPeople)
    checkWinnerPeopoles.forEach(p => console.log(p[0]))
});



