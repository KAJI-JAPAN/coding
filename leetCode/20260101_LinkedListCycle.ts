  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
      }
  }

  /**
   * 速いポインターと遅いポインターを用意する
   * 速いポインターが遅いポインターを追い越したらCycleとなる
   * 追い越すまでにLinkedLiestがなくなったら循環になっていないのでfa;se
   */

function hasCycle(head: ListNode | null): boolean {
    if (head === null) return false

    let slow = head
    let fast = head

    while(fast !== null && fast.next !== null ) {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) return true
    }
    return false
};