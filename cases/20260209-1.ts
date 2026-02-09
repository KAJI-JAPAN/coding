/*
* 演習1：トランザクションデータの集計（$O(N)$）
* 【問題設定】ある決済システムから抽出された取引データの配列があります。
*     有効な取引のみを抽出し、**「通貨（currency）ごとの合計金額」**を算出する関数を実装してください。
*
*【要件】
* status が 'completed' のデータのみを集計対象とすること。
* 計算量は $O(N)$ であること（二重ループを避ける）。
* 結果は、通貨コードをキー、合計金額を値とするオブジェクトで返すこと。
*
* */


// ex
const transactions = [
	{ id: "tx_01", currency: "JPY", amount: 1200, status: "completed" },
	{ id: "tx_02", currency: "USD", amount: 50, status: "completed" },
	{ id: "tx_03", currency: "JPY", amount: 3000, status: "pending" }, // 対象外
	{ id: "tx_04", currency: "JPY", amount: 800, status: "completed" },
	{ id: "tx_05", currency: "USD", amount: 20, status: "failed" }    // 対象外
];

/** 【期待される出力】
 * {
 *   JPY: 2000,
 *   USD: 50
 * }
 */

 /**
  やること
     通貨ごとの合計金額算出する関数を作る
	要件メモ
  ・completeは除く
  ・二重ループを避ける
  ・通過コードキー：　合計金額 の「オブジェクト」

  認識合わせ
    ・負の数は存在しますか？
    ・配列がからのパターンの考慮
  **/

 const totalAmountPair = (transactions) => {
	 if(!transactions || transactions.length === 0) return {}
	const onlyCompleted = transactions.filter((tx) => tx.status === "completed");

	 const total = {}

	 for (const tx of onlyCompleted) {
		 const [ currency, amount ] = tx;
		 total[currency] = (total[currency] || 0) + amount;
	 }
	 return total;
 }




const totalAmountPairReduce = (transactions) => {
	 if(!transactions || transactions.length === 0) return {}

	 return transactions.filter((tx) => tx.status === "completed")
		 .reduce((acc, tx) => {
			 const [ currency, amount ] = tx;
			 acc[currency] = (acc[currency] || 0) + amount

			 return acc
		 }, {})
}


type Trasaction = {
	 id: string;
	 amount: number;
	 currency: string;
	 status: "completed" | "pending" | "failed";
}

type CurrencyTotals = Record<string, number>;


const totalAmountPairTs = (transactions: Trasaction[]):  CurrencyTotals => {
	if(!transactions || transactions.length === 0) return {}

	return transactions.filter((value) =>  value.status === "completed")
		.reduce((acc: CurrencyTotals, tx: Trasaction) => {
			const {currency, amount} = tx

			const currencyTotal =  acc[currency] ?? 0
			acc[currency] = currencyTotal + amount

			return acc
		}, {})
}


