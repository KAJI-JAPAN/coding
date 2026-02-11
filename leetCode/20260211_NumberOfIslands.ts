function numIslands(grid: string[][]): number {
	const m = grid.length
	const n = grid[0].length
	let count = 0

	const movement = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1]
	] as const

	for(let i=0; i < m; i++) {
		for(let j=0; j < n; j++) {
			if (grid[i][j] !== "1") continue

			count++

			grid[i][j] = "0"
			const q = []
			q.push([i,j])

			while(0 < q.length) {
				const [row, col] = q.shift()

				for(const [mvr, mvc] of movement) {
					const rowMvr = row + mvr
					const colMvc = col + mvc

					if((rowMvr < 0 || rowMvr >= m || colMvc < 0 || colMvc >= n )) continue
					if(grid[rowMvr][colMvc] !== "1") continue

					grid[rowMvr][colMvc] = "0"
					q.push([rowMvr, colMvc])
				}
			}
		}
	}
	return count
};