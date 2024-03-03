
/*
 居酒屋で働きながらクラスの勉強をしていたあなたは、お客さんをクラスに見立てることで勤務時間中の店内の人数や注文の情報を管理できることに気付きました。
全てのお客さんは、ソフトドリンクと食事を頼むことができます。加えて 20 歳以上のお客さんはお酒を頼むことができます。
20 歳未満のお客さんがお酒を頼もうとした場合はその注文は取り消されます。
また、お酒（ビールを含む）を頼んだ場合、以降の全ての食事の注文 が毎回 200 円引きになります。

今回、この居酒屋でビールフェスをやることになり、ビールの注文が相次いだため、いちいちビールの値段である 500 円を書くのをやめ、注文の種類と値段を書く代わりに 0 とだけを書くことになりました。

勤務時間の初めに店内にいるお客さんの人数と与えられる入力の回数、各注文をしたお客さんの番号とその内容、または退店したお客さんの番号が与えられます。
お客さんが退店する場合はそのお客さんの会計を出力してください。勤務時間中に退店した全てのお客さんの会計を出力したのち、勤務時間中に退店した客の人数を出力してください。

sum_1
...
C
お客さんが帰るたびにそのお客さんの会計を出力してください。 1 人の会計ごとに改行を行ってください。
勤務時間中に帰った全てのお客さんの会計を出力したのち、勤務時間中に退店した客の人数 C を出力してください。

入力例1
2 3
20
30
1 0
2 0
1 A

出力例1
500
1

入力例2
7 12
68
85
57
32
90
74
7
2 0
4 A
3 0
1 A
4 softdrink 3781
6 softdrink 3010
4 0
5 alcohol 1018
1 0
1 softdrink 376
1 softdrink 797
2 alcohol 4284

出力例2
0
0
2

* */

/*
方針
・未成年のお客さんのクラス・成年済のお客さんのクラスに会計をする関数を追加し、会計ごとに金額を出力し、退店者数を +1 する必要があります。
・退店者数はグローバル変数で管理することもできますが、お客さんに関する情報なので、クラスの中で管理するのが望ましいです。
  そこでクラスの静的メンバを用いることができます。
・静的メンバとは、オブジェクト間を超えて共有される変数や関数のことです。
　これを用いることで、お客さん一人一人が退店した人数を覚えておくよりも、効率的に退店した人数を記憶しておくことができます。
* */

process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    lines.push(line);
});

reader.on('close', () => {
    const [N, K] = lines.shift().split(' ').map(Number);
    const customers = [];

    class Customer {
        static numOfLeft = 0;
        constructor(age) {
            this.age = age;
            this.amount = 0;
        }

        takeFood(price) {
            this.amount += price;
        }

        takeSoftDrink(price) {
            this.amount += price;
        }

        takeAlcohol() {
            // 未成年の場合は何もしない
        }

        accounting() {
            console.log(this.amount);
            Customer.numOfLeft++;
        }
    }

    class Adult extends Customer {
        constructor(age) {
            super(age);
            this.discountApplied = false; // 割引が適用されたかどうか
        }

        takeFood(price) {
            // 割引が適用されている場合は200円引き
            super.takeFood(this.discountApplied ? price - 200 : price);
        }

        takeAlcohol(price = 500) {
            this.amount += price;
            this.discountApplied = true; // お酒を注文したので割引を適用
        }
    }

    for (let i = 0; i < N; i++) {
        const age = parseInt(lines.shift(), 10);
        customers.push(age >= 20 ? new Adult(age) : new Customer(age));
    }

    lines.forEach(line => {
        const [index, command, price] = line.split(' ');
        const customerIndex = parseInt(index, 10) - 1;
        const customer = customers[customerIndex];

        switch (command) {
            case 'food':
                customer.takeFood(parseInt(price, 10));
                break;
            case 'softdrink':
                customer.takeSoftDrink(parseInt(price, 10));
                break;
            case 'alcohol':
            case '0': // ビールを注文したとみなす
                customer.takeAlcohol();
                break;
            case 'A':
                customer.accounting();
                break;
        }
    });

    console.log(Customer.numOfLeft);
});
