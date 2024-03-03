/*
*期待する出力
数列に含まれる値で、k 以上であるもののうち、値が最小のものを出力してください。
また、末尾に改行を入れ、余計な文字、空行を含んではいけません。


 入力例1
5
-5 11 3 -9 0
-4

出力例1
0
* */

/*
* sortをして順番を整備した後に先頭からループすることで最初の値を取得
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
    const count = Number(lines[0])
    const list = lines[1].split(' ').map(Number)
    const k = lines[2]

    list.sort((a,b) => a-b)

    for(let i=0; i<=count; i++) {
        if(k <= list[i]) {
            return console.log(list[i])
        }
    }


});