function numIslands(grid: string[][]): number {
	/**
    方針
      1を見つけたらカウントを増やす
      その後に縦横の1を0にする
      存在しなくなったら次へ進む
	 */

	const m = grid.length
	const n = grid[0].length

	let count = 0

	// 上下/左右 移動
	const perad = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1]
	] as const

	for(let row=0; row < m; row++) {
		for(let column=0; column < n; column++) {
			if (grid[row][column] !== "1") continue

			count++

			// 1を0に変えていく処理
			const queue: Array<[number, number]> = []
			queue.push([row, column])
			grid[row][column] = "0"

			// 周辺を1から0へ変えていく処理
			while(queue.length > 0) {
				const [cr, cc] = queue.shift()!

				for(const [peradRow, peradColumn] of perad ) {
					const nr = cr + peradRow
					const nc = cc + peradColumn

					if(nr < 0 || nr >= m || nc < 0 || nc >= n ) continue
					if(grid[nr][nc] !== "1") continue

					grid[nr][nc] = "0"
					queue.push([nr, nc])
				}
			}
		}
	}

	return count

};