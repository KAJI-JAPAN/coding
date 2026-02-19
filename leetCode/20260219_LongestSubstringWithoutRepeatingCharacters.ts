function lengthOfLongestSubstring(s: string): number {
	let start = 0
	let memory = new Map()
	let maxCount = 0

	for(let end=0; end < s.length; end++) {
		const char = s[end]

		// 持っているか、前の値が現在の範囲内にあるか
		if(memory.has(char) && memory.get(char) >= start) {
			// 前の値の次からスタートする。左側(後ろ側)をずらす
			start = memory.get(char) + 1
		}

		memory.set(char, end)

		const currentCount = end - start + 1

		maxCount = Math.max(currentCount, maxCount)
	}
	return maxCount
};