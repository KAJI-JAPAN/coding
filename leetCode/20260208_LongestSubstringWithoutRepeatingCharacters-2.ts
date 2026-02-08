// 文字列 s に対して、重複する文字を含まない最長の部分文字列の長さを求めよ。

// Example 1:
//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:
//
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// ------------------------------------------------------------------------------------------

// 	条件
//    1. 連続した最大の文字の長さを求める
//    2. 間を挟んだ場合は、それまでに連続した文字列を最大とするので、間を挟むまでの最大値がカウントされる
//    ex) pwwkew
//      pwの時点で2、pの後にwwが出てくるから、カウントしない
//      wからまたカウントが始まりwkeで3、最後のwは1扱い
//      この問題の連続した文字列は3
//  方針を考える
//  1. 区間を設定して、その区間を伸ばしたり、縮めたりしたい
//  2. 伸ばしたり縮めたりする条件：文字列が重複した場合
//  実装
//  1. 文字列をループさせる。一個ずつ見る
//  2. 区間を設定する
//  3. その区間内に重複がある　&&  区間に存在する場合　→ 重複していない場所までジャンプ O(n)
//  4. 文字列の位置とindexを保持
//  5. この時点での区間の最大数を取得(連続した異なる文字の長さ)
//  6. 今までの文字列の長さの最大値と比較して大きい方が答えとなる

//    初期値として必要なもの
//      Mapを使うindexと文字列を保持して、区間のStartの変更に使う。MapだとO(n) → メモリとなり、毎回は変わらない
//      startを覚えておく必要がある → 区間の始まり。毎回区間が変わる可能性があるので、つに引き継ぐ必要がある
//      カウントの最大値を覚えておく必要がある　→ 実質的な答え
//    初期値としていらないもの
//      区間の終わりの保持 → ループ時のcurrentが役割を果たす
//      その計算ないので文字列最大値 → ループの中で毎回変わるので、ループで保持
//


function lengthOfLongestSubstring(s: string): number {
	let maxStringLength = 0
	let start = 0
	const memoryForJumping: Map<string, number> = new Map()

	for(let end=0; end < s.length; end++) {
		// 1:  a
		const char = s[end]

		// 1;  undefined
		const prevIndex = memoryForJumping.get(char)
		if(prevIndex !== undefined && prevIndex >= start) {
				// ジャンプした次の値から始めるために + 1
				start = prevIndex + 1
		}
		memoryForJumping.set(char, end)

		const currentLength = end - start + 1
		maxStringLength = Math.max(currentLength, maxStringLength)
	}
	return maxStringLength
};