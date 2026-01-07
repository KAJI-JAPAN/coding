/**
 * Definition for singly-linked list.
 */
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
      }
  }


/*
・ポインターの向きを変えてあげる必要がある
・Linked Listがnullになるまで繰り返し処理を行う
・繰り返し処理でnextに前の値を入れていく
・次のLinkedListがなくなったら終了

・必要な状態
    ・一個前(変更後)
    ・現在(変更前)
    ・次(変更前/存在するか？)
*/
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null
    let current = head
    let next :ListNode | null = null

    while(current !== null) {
        next = current.next
        current.next = prev
        prev  = current
        current = next
    }

    return prev
};