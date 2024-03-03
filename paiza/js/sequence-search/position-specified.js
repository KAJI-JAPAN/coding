/*
 整数 n と、数列 a_1, ... , a_n と、整数 k が与えられます。

整数 k が数列の何番目にあるかを求めてください。なお、最初の要素 (a_1) を 1 番目とします。

ただし、数列に整数 k が含まれていない場合は、0 を出力してください。

また、数列に整数 k が複数含まれている場合は、数列を先頭から順に見たときに最初に現れる k が数列の何番目にあるかを求めてください。

入力例1
5
-3 2 0 -1 2
2

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
    const num = Number(lines[0])
    const numList =  lines[1].split(' ').map(Number)
    const k = Number(lines[2])

    for(let i=0; i <= num; i++) {
        if(k === numList[i]) {
            return console.log(i + 1)
        }
    }
    return console.log(0)
});