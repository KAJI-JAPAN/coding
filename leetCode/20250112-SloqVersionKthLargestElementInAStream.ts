// ・追加するたびに降順でsortをする
// ・K番目の大きさの値を返す
// 	O(log n)：増えるが非常にゆっくり

class KthLargest {
    private order: number
    private heap: number[] = []
    constructor(k: number, nums: number[]) {
        this.order = k
        nums.forEach((x) => this.heap.push(x))
    }

    add(val: number): number {
        this.heap.push(val)
        this.heap.sort((a, b) => b - a)
        return this.heap[this.order - 1]
    }
}
