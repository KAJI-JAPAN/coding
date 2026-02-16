function groupAnagrams(strs: string[]): string[][] {

	const map = new Map<string, string[]>()

	for(const char of strs) {
		const sortedChar = char.split("").sort().join("")

		if(!map.has(sortedChar)) {
			map.set(sortedChar, [])
		}

		map.get(sortedChar).push(char)
	}

	return Array.from(map.values())
};