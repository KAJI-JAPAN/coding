/*
数列に含まれるすべての整数 k について、それぞれ何番目にあるかを、数列を先頭から見たときに現れる順に、改行区切りで出力してください。
また、末尾に改行を入れ、余計な文字、空行を含んではいけません。

ただし、整数 k が数列に含まれていない場合は、何も出力しないでください。

入力例1
5
-3 2 0 -1 2
2

出力例1
2
* */

/*
* 配列を作って追加するだけ
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
    let result = []

    for(let i=0; i <= num; i++) {
        if(k === numList[i]) {
            result.push(i + 1)
        }
    }

    result.forEach(e => console.log(e))
});