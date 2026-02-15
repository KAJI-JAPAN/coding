function maxProfit(prices: number[]): number {
	let minProfit = prices[0]
	let maxProfit = 0

	for(let i=1; i < prices.length; i++) {
		const todayPrice = prices[i]

		if(todayPrice < minProfit) {
			minProfit = todayPrice
		} else if (todayPrice - minProfit > maxProfit) {
			maxProfit = todayPrice - minProfit
		}
	}
	return maxProfit
};