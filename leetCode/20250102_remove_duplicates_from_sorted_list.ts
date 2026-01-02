/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// 方針とポイントの整理
// 方針：
// ・既にsort済みのため、隣り合っているかを確認して、隣り合っている場合は次の値へスキップする。
// ・その際に飛ばした値のリンクを前の値に付け替える必要がある
//
// ポイント
// ・sort済みであるため、同じ値が必ず隣り合っている
// ・LinkedListであるため、List同士が連結しており、ある値が次の値をもつ


function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current = head

    while(current !== null && current.next !== null) {
        if(current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head
};