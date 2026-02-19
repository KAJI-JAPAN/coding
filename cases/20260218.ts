// 最短ルート（これなら20秒で書ける）
const threshold = sd * 2;
const indices = data
	.map((x, i) => Math.abs(x - avg) > threshold ? i : -1)
	.filter(i => i !== -1);