/*
整数 k が数列の何番目にあるかを出力してください。
ただし、数列に整数 k が含まれていない場合は、0 を出力してください。
また、数列に整数 k が複数含まれている場合は、数列を先頭から順に見たときに最後に現れる k が数列の何番目にあるかを出力してください。

入力例1
5
-3 2 0 -1 2
2

出力例1
2
* */

/*
* 一番後ろからループを回すだけ
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

    for(let i=num; i >= 0; i--) {
        if(k === numList[i]) {
            return console.log(i + 1)
        }
    }
    return console.log(0)});