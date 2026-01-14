class MyMinHeap {
    private data: number[] = [];

    size(): number {
        return this.data.length;
    }

    peek(): number {
        return this.data[0];
    }

    push(x: number): void {
        this.data.push(x);
        this.siftUp(this.data.length - 1);
    }

    pop(): number {
        const n = this.data.length;
        if (n === 1) return this.data.pop() as number;

        const top = this.data[0];
        this.data[0] = this.data.pop() as number;
        this.siftDown(0);
        return top;
    }

    private siftUp(i: number): void {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.data[p] <= this.data[i]) break;
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p;
        }
    }

    private siftDown(i: number): void {
        const n = this.data.length;
        while (true) {
            const l = i * 2 + 1;
            const r = i * 2 + 2;
            let smallest = i;

            if (l < n && this.data[l] < this.data[smallest]) smallest = l;
            if (r < n && this.data[r] < this.data[smallest]) smallest = r;

            if (smallest === i) break;
            [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
            i = smallest;
        }
    }
}

class KthLargest {
    private k: number;
    private heap: MyMinHeap;

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.heap = new MyMinHeap();

        for (const x of nums) {
            this.heap.push(x);
            if (this.heap.size() > this.k) this.heap.pop();
        }
    }

    add(val: number): number {
        this.heap.push(val);
        if (this.heap.size() > this.k) this.heap.pop();
        return this.heap.peek();
    }
}