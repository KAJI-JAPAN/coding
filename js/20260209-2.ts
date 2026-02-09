// 【問題】 以下の orders 配列（注文リスト）から、**「カテゴリーごとの合計金額」**を計算したオブジェクトを作成してください。

const orders = [
	{ category: 'food', price: 1200 },
	{ category: 'electronics', price: 15000 },
	{ category: 'food', price: 800 },
	{ category: 'books', price: 3000 },
	{ category: 'electronics', price: 5000 },
];

// 期待される出力: { food: 2000, electronics: 20000, books: 3000 }
const result1 = orders.reduce((acc, cur) => {
	const category = cur.category;
	const price = cur.price;

	if(acc[category]) {
		acc[category] = 0;
	}

	acc[category] += price;

	// reduceのreturnはここで処理が終わらない。次のループに入る
	return acc;
}, {})

console.log(result1);


//課題2：some と every を使い分ける
// 【問題】 以下の inventory（在庫）を確認する2つの処理を書いてください。
//
// isOutOfStock: 在庫（stock）が 0 の商品が「1つでも」あるかどうかを判定（真偽値）。
//
// isAllExpensive: 「すべての」商品の価格（price）が 1000円以上 かどうかを判定（真偽値）。


const inventory = [
	{ name: 'Apple', price: 150, stock: 10 },
	{ name: 'PC', price: 120000, stock: 2 },
	{ name: 'Pen', price: 100, stock: 0 },
];

// 1. 実装してください
const isOutOfStock = inventory.some(item => item.stock === 0);

// 2. 実装してください
const isAllExpensive = inventory.every(item => item.price >= 1000);

console.log(isOutOfStock);    // 期待: true
console.log(isAllExpensive);  // 期待: false


//課題3：find と Object.entries
// 【問題】 以下の userScores オブジェクトから、「80点以上のユーザー」のうち、最初に見つかった一人の情報を、"名前は〇〇、点数は△△です" という文字列で出力してください。

const userScores = {
	Taro: 75,
	Hanako: 92,
	John: 85,
};

// 手順:
// 1. Object.entries を使って、オブジェクトを [名前, 点数] の配列の配列に変換する
// 2. find を使って、点数が80以上のペアを探す

const entries = Object.entries(userScores);
const winner = entries.find(([_name, score]) => {
	return score >= 80
});

if (winner) {
	const [name, score] = winner;
	console.log(`名前は${name}、点数は${score}です`);
}
// 期待: "名前はHanako、点数は92です"