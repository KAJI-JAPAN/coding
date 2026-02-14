function lengthOfLongestSubstring(s: string): number {
	// startは区間を覚えるために必要
	let start = 0

	// 同じ値が存在するのか覚えておきたい
	const jumpIndex = new Map<string, number>()

	// 実質的な答えになるカウント。最大値を更新したらこちらも更新をする
	let maxCount = 0


	// indexを使って対象のindexまでジャンプしたいのでforを使用する
	for (let end=0; end < s.length; end++) {
		const char = s[end]

		// 今までの文字の中で同じ文字ある？
		// かつ
		// それは今の区間内？(startの内側?)
		const getSeenChar = jumpIndex.get(char)
		// !getSeenCharだと0の時にtrueになるバグ
		if(getSeenChar !== undefined && getSeenChar >= start) {
			// startの区間をずらす+1しているのはstart位置が被らないように。次からカウントを開始
			start = getSeenChar + 1
		}

		// ちゃんと記憶する必要がある
		// 同じ文字列が出てきた場合は上書きされるがOK。
		// 次に同じ文字が来たとき、最新の場所を基準にジャンプしないと、重複を飛び越せないから。
		// startは既に右へ動かしているので、古い値がstartより左にあることは確定済み古い値を二度と参照することはない
		jumpIndex.set(char, end)

		//  0, 1, 2 の場合 3なのに2になるので start=0 end=2 なので+1
		const currentCount = end - start + 1

		//  大きい方を採用
		maxCount = Math.max(currentCount, maxCount)
	}

	return maxCount
};