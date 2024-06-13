/*
 paiza 市に住んでいるあなたは、普段の移動手段は全て paiza バスを使います。paiza バスでは paica という IC カードを乗車券として使うことができます。事前に paica にチャージをすることで利用できます。

バスの運賃支払に paica のカード残額を使うと、運賃の 10 % が paica ポイントとしてたまります。

バスを降車する時に、支払う運賃以上のポイントがある場合は、ポイントが優先的に運賃の支払いに使われます。ただし、1 ポイントは 1 円になります。ただし、ポイントで運賃を支払った場合、新たなポイントは発生しません。


あなたは、カード残金とポイントをどれくらい使ったか知るためのプログラムを書くことにしました。

あなたには、最初にチャージする現金と、バスを利用した時にかかった料金のリストが与えられるので、毎回の降車時に残っているお金とポイントを出力してください。

ただし、途中でカード残高とポイントの両方が運賃を下回ることはありません。

入力例 1 は以下のようになります。

入力例1
2000 5
300
500
300
100
100

出力例1
1700 30
1200 80
900 110
900 10
800 20

入力例2
3000 3
1000
1000
1000

出力例2
2000 100
1000 200
0 300

* */

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
    const [firstLine, ...fareLine] = lines
    let [balance, totalRide] = firstLine.split(' ').map(Number)
    const fares = fareLine.map(fare => fare.split(' ').map(Number))

    let point = 0
    let remainingMoney = 0
    for(const fare of fares) {
        // 以上、未満注意、ポイントと運賃が同じ時に対応できなくなる
        if(point <= fare) {
            balance = balance - fare
            point += fare * 0.1
        } else {
            point -=fare
        }
        console.log(`${balance} ${point}`)
    }
});