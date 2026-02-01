// アナグラム = 同じ文字、同じ回数
// なので、sortして同じものをグループ化することで分けて作っていく
// eat → sortする → aet sortは昇順でアルファベット順になる
// tea → sortする → aet sortでアルファベット順になるので同じになる
// 上記、同じ値をグループ化する
// これはMapでやる
//  グループ化したい
//  “検索” を大量にする
function groupAnagrams(strs: string[]): string[][] {
	let groupMap: Map<string, string[]> = new Map()

	for(const char of strs) {
		const key = char.split("").sort().join("")
		if (!groupMap.has(key)) groupMap.set(key, [])
		groupMap.get(key)!.push(char)
	}

	return Array.from(groupMap.values())
};