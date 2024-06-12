/*
PAIZA さんは以前から住みたかった町に引っ越して来ました。

その町には碁盤の目状に道が張り巡らされており、合計で N 軒の家が建っています。
しかし、家同士には距離があるため、PAIZAさんは距離 D までのご近所さんにご挨拶に伺うことにしました。

PAIZA さんの家の座標とその他の家の座標が与えられます。
PAIZA さんが挨拶に向かう件数を出力してください。
図1

家同士の距離は | x_1 - x_2 | + | y_1 - y_2 | で定義されます。

たとえば、入力例 1 では、PAIZA さんの家は (0, 0) にあり、

家 1 との距離は | 0 - 2 | + | 0 - 3 | = 5
家 2 との距離は | 0 - 9 | + | 0 - 4 | = 13
家 3 との距離は | 0 - 5 | + | 0 - 4 | = 9

ご挨拶に伺う家は距離が 10 以下の家なので、家 1 と家 3 にご挨拶に伺います。
ご挨拶に伺う家は 2 軒なので 2 を出力してください。

入力例1
3 10
0 0
2 3
9 4
5 4

出力例1
2
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
    const [ firstLine, secoundLine, ...houseLines] = lines
    const [total, position] = firstLine.split(' ').map(Number)
    const [px, py] = secoundLine.split(' ').map(Number)
    const houses = houseLines.map(item => item.split(' ').map(Number))

    let count = 0
    for(const [x, y] of houses) {
        const diff = Math.abs(px - x) + Math.abs(py - y)
        if(position >= diff ) {
            count++
        }
    }
    console.log(count)
});