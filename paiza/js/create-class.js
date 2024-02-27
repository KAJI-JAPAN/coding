/*
エンジニアであり、社員を管理を管理する立場にあるあなたは、効率的に社員を管理するために、
各社員の社員番号 number と名前 name を持ち、加えて情報を返す関数を持つような構造体、すなわち次のようなメンバ変数とメンバ関数を持つ社員クラス class employee を作成することにしました。

メンバ変数

number : 整数
name : 文字列


メンバ関数
getnum(){
    return number;
}
getname(){
    return name;
}


入力で make number name と入力された場合は変数に number , name を持つ社員を作成し、 getnum n と入力された場合は n 番目に作成された社員の number を、getname n と入力された場合は n 番目に作成された社員の name を出力してください。
入力される値
N
S_1
...
S_N


・ 1 行目では、与えられる入力の回数 N が与えられます。
続く N 行では、次のいずれかの形式の入力が与えられます。
・ make number name
・ getnum n
・ getname n

入力値最終行の末尾に改行が１つ入ります。
文字列は標準入力から渡されます。
*/ 

/*
・クラスのインスタンスを保存するために配列を使用
・indexはあくまでemployee配列ようなので-1する必要あり
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

class Employee {
    #number
    #name
  constructor(number, name) {
    this.#number = number;
    this.#name = name;
  }
  
  getnum () {
      return this.#number
  }
  getname () {
      return this.#name
  }
}

reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const employee =[]
    for(let i=1; i < lines.length; i++){
        const inputs = lines[i].split(' ') 
        const command = inputs[0]
        
        if(command === "make") {
            const number = parseInt(inputs[1], 10);
            const name = inputs[2]
            employee.push(new Employee(number, name))
        }
        if(command === "getnum") {
            index = Number(inputs[1] - 1)
            console.log(employee[index].getnum())
        }
        
        if(command === "getname") {
            index = Number(inputs[1] - 1)
            console.log(employee[index].getname())
        }
    }
});