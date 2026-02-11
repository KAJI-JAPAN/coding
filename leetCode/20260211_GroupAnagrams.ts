/*
* Given an array of strings strs, group the anagrams together. You can return the answer in any order.



Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*
* */

function groupAnagrams(strs: string[]): string[][] {
	function groupAnagrams(strs: string[]): string[][] {
		// アナグラムはsortで並び替えることが可能
		// sortをしたものをキーとして、対象を並び替えたものが存在するか。存在すれば配列として追加
		// しなければ新しく追加
		// 空の場合はそのまま配列として返す
		if(!strs || strs.length === 0) return [strs]
		const group = new Map<string, string[]>()

		for (const s of strs) {

			const sortedKey = s.split("").sort().join()

			// キーがない場合空の配列でpushする
			if(!group.has(sortedKey)) {
				group.set(sortedKey, [])
			}

			// キーがあるのでループ中の文字列をpushする
			//　この時、get!で値があることを保証すること
			// Map.get.pushでMao内の配列に値を追加できる
			group.get!(sortedKey).push(s)
		}

		// Map内の値を全て取り出すにはMap.valuesを使用する
		return Array.from(group.values())
	};
};