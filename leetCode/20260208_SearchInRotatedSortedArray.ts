// here is an integer array nums sorted in ascending order (with distinct values).
//
// Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].
//
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
//
// You must write an algorithm with O(log n) runtime complexity.
//
//
//
// Example 1:
//
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
//
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:
//
// Input: nums = [1], target = 0
// Output: -1

// 方針
//  必ず昇順になっているので二つに分ける
// 　正常にsortしている側の方が、確認しやすいので。昇順になっているsortされている方を確認していく
// 　見つかるまで二つに分けて、targetが含まれない方を捨てる
//   middleがtagetと同じになったら終了

function search(nums: number[], target: number): number {
	let left: number = 0
	let right: number = nums.length - 1

	while (left <= right) {
		const middle = Math.floor((left + right) / 2)

		if (nums[target] === nums[middle]) return middle

		if (nums[left] <= target && target <= nums[middle] ) {

		}
	}

	return -1
}