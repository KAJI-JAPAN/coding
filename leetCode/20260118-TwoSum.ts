

/*
* https://leetcode.com/problems/two-sum/
* 配列を左から 1回だけ ループする
* メモ帳 seen（ハッシュ）に 過去に出た値 nums[i] とその index を記録していく
* 例：seen[nums[i]] = i
* 各 i で
*   •	need = target - nums[i] を計算する
*   •	need が seen に存在するかを見る
*   •	あれば、その seen[need] と i が答え
*   •	なければ、seen[nums[i]] = i として次へ
* */


function twoSum(nums: number[], target: number): number[] {

};