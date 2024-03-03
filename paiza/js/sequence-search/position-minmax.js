/*
*最大値と最小値をこの順に半角スペース区切りで1行に出力してください。
また、末尾に改行を入れ、余計な文字、空行を含んではいけません。

入力例1
-11 10 0 9 6 -10 5 3 2 -8

出力例1
10 -11
*
* */
/*
* Math.max, Math.minは可変調引数にしないと配列を処理できない
* 可変調引数：長さが決まっていない引数のこと
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
    const list = lines[0].split(' ').map(Number)
    console.log(`${Math.max(...list)} ${Math.min(...list)}`)
});