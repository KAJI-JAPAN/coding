/*
*https://leetcode.com/problems/two-sum/description/
*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

* */

// 全てのパターンを網羅するのでデータ量が増えた時に遅くなる
function twoSum(nums: number[], target: number): number[] {
    for(let i=0; i<= nums.length; i++) {
        for(let j=i+1; j< nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

//　HashMapを使うと一回ですむ
/*
* @param nums=[2,7,11,15] target=9
**/

/*
 1: 7 = 9 - 2
 2: 2 = 9 - 7
 const complement = target - nums[i];

 1: map　{7, ...} false
 2: map {2, 0} true
 if (map.has(complement)) {
    1: slip
    2: [0, 1]
     return [map.get(complement), i];
 }

 1: map {2, 0}
 map.set(nums[i], i);
* */

/*
* ポイント
* 目標値 target から任意の数 x を引いたとき、その差が配列の他のどこかに存在すれば、その二つの数の和は target になる
* */
function twoSum(nums: number[], target: number): number[] {
    const map = new Map()
    for(let i=0; i < num.length; i++) {
        const complement = target - nums[i]
        if(map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
    return []
};
