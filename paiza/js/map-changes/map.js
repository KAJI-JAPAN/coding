/*
行数 H , 列数 W の盤面があり、各マスには文字が 1 つだけ書かれています。盤面と y , x 座標 が与えられるので、盤面の与えられた座標の文字が "." の場合は "#" に、"#" の場合は "." に書き換えた後の盤面を出力してください。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。

入力される値
H W
S_0
...
S_(H-1)
y x

入力例1
3 3
...
...
...
0 0

出力例1
#..
...
...

入力例2
4 4
####
####
....
##..
2 2

出力例2
####
####
..#.
##..
* */

/*
* 先に行の特定を行う
* 行が特定できたらその行のxを特定する
* xだけをバラして変更
* xを変更したら元の行に代入してjoinでくっつける
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
    const [h,w] = lines[0].split(' ').map(Number)
    const [y, x] = lines[h + 1].split(' ').map(Number)

    for(let i=1; i <= h; i ++) {
        if(y === i-1) {
            let targetLine = lines[i].split('')
            targetLine[x] = targetLine[x] === '.' ? "#" : "."
            lines[i] = targetLine.join('')
        }
        console.log(lines[i])
    }
});