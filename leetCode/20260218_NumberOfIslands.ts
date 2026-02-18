function numIslands(grid: string[][]): number {
	const m = grid.length
	const n = grid[0].length
	let count = 0

	const move = [
		[1,0],
		[-1,0],
		[0,1],
		[0, -1]
	] as const

	for(let i=0; i < m; i++) {
		for(let j=0; j < n; j++) {
			if(grid[i][j] !== "1") continue

			count++

			grid[i][j] = "0"
			const q = []
			q.push([i, j])

			while(0 < q.length) {
				const [rm, cn] = q.shift()
				for(const mo of move) {
					const [mor, mocol] = mo

					const rmmor = rm + mor
					const cnmocol = cn + mocol

					if(rmmor < 0 || rmmor >= m || cnmocol < 0 || cnmocol >=n ) continue
					if(grid[rmmor][cnmocol] !== "1") continue

					grid[rmmor][cnmocol] = "0"
					q.push([rmmor, cnmocol])
				}
			}
		}
	}

	return count
};