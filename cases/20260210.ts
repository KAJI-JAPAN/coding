/*
* 演習1：
* 複数ソースからのデータ統合（マージと重複排除）【問題設定】2つの異なるシステムから取得した「ユーザーの連絡先リスト」があります。
* これらを統合し、**「メールアドレスをキーにして重複を取り除いた最新のリスト」**を作成してください。
*
* 【要件】同じメールアドレスが両方のリストにある場合、updatedAt が新しい方のデータを優先してください。計算量 $O(N + M)$ で実装してください。
* */


type Contact = {
	email: string;
	name: string;
	updatedAt: number; // タイムスタンプ
};

const sourceA: Contact[] = [
	{ email: "user@example.com", name: "User A", updatedAt: 1000 },
	{ email: "test@example.com", name: "Test A", updatedAt: 2000 },
];

const sourceB: Contact[] = [
	{ email: "user@example.com", name: "User A Revised", updatedAt: 3000 },
	{ email: "new@example.com", name: "New User", updatedAt: 1500 },
];

// 期待される出力:
// [
//   { email: "user@example.com", name: "User A Revised", updatedAt: 3000 },
//   { email: "test@example.com", name: "Test A", updatedAt: 2000 },
//   { email: "new@example.com", name: "New User", updatedAt: 1500 }
// ]


const mergeSorce = (a: Contact[], b: Contact[]): Contact[] => {
	if()
	const mergeSorceMap = new Map();

	[...a, ...b].forEach((c: Contact) => {
		const exist =  mergeSorceMap.get(c)!.push(c);

		if(!exist || c.updatedAt >= exist.content.updatedAt) {
			mergeSorceMap.set(c.email, c.updatedAt);
		}

		return Array.from(mergeSorceMap.value())
	})
}