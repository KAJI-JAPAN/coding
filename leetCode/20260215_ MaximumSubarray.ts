function maxSubArray(nums: number[]): number {
	let currentSum = nums[0]
	let maxSum = nums[0]

	for(let i=1; i < nums.length; i ++) {
		const num = nums[i]

		if(currentSum  < 0) {
			currentSum = num
		} else {
			currentSum += num
		}

		maxSum = Math.max(currentSum, maxSum)

	}

	return maxSum
};