function lengthOfLongestSubstring(s: string): number {
	// 右に向かって一個ずつ進める
	// 区間を決めて、重複文字がない状態を保つ
	// もし同じ文字列がきたら、区間を右に一個ずらして、古い方の同じ文字を範囲から除く
	// 区間の長さの最大値を更新し続ける
	// Mapを使用して、その文字を最後に見た場所を覚えておき左端を必要な位置へ動かす

	const lastIndexByChar = new Map<string, number>()

	let start = 0;
	let maxLen = 0

	// abcabcbb　が与えられた場合

	// 右に向かって一個ずつ進める
	// abcabcbbをループする
	for (let end=0; end < s.length; end++) {
		// 現在の配列の値を取得
		// 1: a
		// 2: b
		// 3: c
		// 4: a
		const ch = s[end]

		// 現在の値がlastIndexByChar上に存在するか(以前に追加したのかを知りるために)
		// 1: aが存在しない
		// 2: bが存在しない
		// 3: cが存在しない
		// 4: aが存在する
		//    prevIndex=3
		//    start=0
		//      prevIndex !== undefined = true
		//      prevIndex >= start = true
		const prevIndex = lastIndexByChar.get(ch)
		// ここで確認していることは2つ：
		// 1) prevIndex !== undefined
		//    -> ch を過去に見たことがある（Mapにキーchが存在する）
		// 2) prevIndex >= start
		//    -> その「過去の ch」が、いまの区間 [start..end-1] の中にある
		//       （区間の外なら重複扱いにしない）


		// preveIdnexがまだ追加されていない && 今見ている区間の中に同じ文字が存在するか？
		if (prevIndex !== undefined && prevIndex >= start) {

			// 重複が区間内で発生するので、start を動かして重複を解消する。
			// 「過去の ch（prevIndex）」の次の位置に start を移動すると、
			// 区間内から古い ch が外れて、重複がなくなる。

			// 4: 1で追加したaのindexが取得される prevIndex = 0 + 1 → 1
			start = prevIndex + 1
		}

		// 今見ている ch の「最後に見た位置」を end に更新する。
		// すでに ch がMapにあれば値は上書きされ、常に最新の位置が入る。

		// 1: a 0 → lastIndexByChar(a, 0)
		// 2: b 1 → lastIndexByChar(a,0, b,1)
		// 3: b 2 → lastIndexByChar(a,0, b,1, c,2)
		// 4: a 3 → lastIndexByChar(a,3, b,1, c,2,)
		lastIndexByChar.set(ch, end)

		// 現在の区間 [start..end] の長さを計算する（両端含むので +1）

		// 1: end=0 start=0 + 1 → 1
		// 2: end=1 start=0 + 1 → 2
		// 3: end=2 start=0 + 1 → 3
		// 4: end=3 start=1 + 1 → 3
		const currentLen = end - start + 1

		// 最大長を更新する（今の区間がこれまでの最大より長ければ置き換える）

		// 1：maxLen=0 currentLen=1  → 1
		// 2：maxLen=1 currentLen=2  → 2
		// 3：maxLen=2 currentLen=3  → 3
		// 4：maxLen=3 currentLen=3  → 3
		maxLen = Math.max(maxLen, currentLen)
	}
	return maxLen
};