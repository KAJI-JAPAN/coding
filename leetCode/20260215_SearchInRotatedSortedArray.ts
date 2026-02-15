function search(nums: number[], target: number): number {
	// 最初は左と右から始まる
	// 左右のどちらかを切り捨てて、どんどん壁が迫ってくるイメージ

	let left = 0
	let right = nums.length -1

	while (left <= right) {
		const mid = Math.floor((right+left) / 2)

		if (nums[mid] === target) return mid

		if(nums[left] <= nums[mid]) {
			if(nums[left] <= target && target < nums[mid]) {
				right = mid -1
			} else {
				left = mid + 1
			}
		} else {
			if (target <= nums[right] && nums[mid] < target) {
				left = mid + 1
			} else {
				right = mid -1
			}

		}
	}

	return -1
};