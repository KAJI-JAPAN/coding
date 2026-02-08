//ドリル1：フィルタリングと抽出 (filter + map)
// お題: ユーザーのリストから、「削除済み（isDeleted: true）」のユーザーを除外し、残ったユーザーの**「IDだけのリスト」**を作ってください。
// 期待する出力: [1, 3]

const users = [
	{ id: 1, name: "Tanaka", isDeleted: false },
	{ id: 2, name: "Suzuki", isDeleted: true },
	{ id: 3, name: "Sato", isDeleted: false }
];

const onlyActiveUser = users.filter(user => !user.isDeleted)
																			.map(user => user.id)


//ドリル2：重複排除 (Set)
// お題: タグのリストに重複があります。重複を取り除いた新しい配列を作成してください。
// 期待する出力: ["API", "DB", "Front"]

const tags = ["API", "DB", "API", "Front", "DB"];

const uniqTags: Set<[string]> = [...new Set(tags)]


//ドリル3：データの整形 (map)
// お題: 金額の配列があります。すべてを消費税（10%）込みの金額にし、さらに**「¥1,100」のような文字列形式**に変換してください。 （※カンマ区切りは不要で、単に ¥ をつけて文字列にするだけでOKです）
// 期待する出力: ["¥110", "¥220", "¥1650"]

const prices = [100, 200, 1500];
const formattedPrices: string[] = prices.map((price): string => `¥${Math.floor(price * 1.1)}`)