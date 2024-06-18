/*
アリスさんはじゃんけんが大好きで、過去に何度も友達のボブさんとじゃんけんを行いました。
手元には、アリスさんとボブさんとの間で、過去に行われたじゃんけんの結果を全て記録したノートがあります。

ノートの記録を元に、過去にアリスさんはボブさんに何回勝ったかを出力するプログラムを作成してください。

例えば入力例 1 の場合、過去にじゃんけんは 6 回行われ、そのうちアリスさんは 3 回勝ち、 1 回あいこ、 2 回負けているので、プログラムでは 3 と一行に出力します。


入力例1
6
G C
C G
P G
G C
P P
P C

出力例1
3

入力例2
8
G C
P C
C G
G C
G P
P G
C C
C P

出力例2
4
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
    const count = lines[0].split(' ').map(Number)

    let win = 0
    for(let i=1; i<=count; i++ ) {
        const rpsg = lines[i].split(' ')
        if(rpsg[0] === 'G') {
            if(rpsg[1] === 'C') {
                win++
            }
        }
        if(rpsg[0] === 'C') {
            if(rpsg[1] === 'P') {
                win++
            }
        }
        if(rpsg[0] === 'P') {
            if(rpsg[1] === 'G') {
                win++
            }
        }
    }
    console.log(win)
});
