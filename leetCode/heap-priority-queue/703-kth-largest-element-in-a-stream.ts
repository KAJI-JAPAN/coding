/*
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream. 

Example 1:

Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output
[null, 4, 5, 5, 8, 8]

Explanation
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8

*/

/*
追加するたびにsortして計算する

優先度付きキューの概念を用いた実装方法もあったが理解できなかった
*/

class KthLargest {
    private heap
    private readonly k
    constructor(k: number, nums: number[]) {
        this.k = k
        this.heap = nums
    }

    add(val: number): number {
        this.heap = val
        this.heap.sort((a, b) => a-b)
        // 大きい要素なので末尾から取得する必要がある
        return this.heap[this.heap.length - this.k]
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */