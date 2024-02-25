// https://leetcode.com/problems/linked-list-cycle/description/
/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

/*
https://note.com/rhayahi/n/n7fc11c09fec6
フロイドの循環検出アルゴリズム

早いポインタと遅いポインタを使用して循環を証明する
早いポインタが一周して遅いポインタに追いつく→循環
早いポインタが追いつかない→循環じゃない

*/

//   class ListNode {
//       val: number
//       next: ListNode | null
//       constructor(val?: number, next?: ListNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.next = (next===undefined ? null : next)
//       }
//  }

// function hasCycle(head: ListNode | null): boolean {
//     const checkValue = new Set<ListNode | null>()
//     let res: boolean = false
//     while (head && !res) {
//         checkValue.has(head) ? res=true 
//         : 
//         checkValue.add(head)
//         head = head.next
//     }
//     return res
// };

function hasCycle(head: ListNode | null): boolean {
    let slow = head
    let fast = head.next
    while(fast && fast.next) {
        slow = head.next;
        fast = fast.next.next 
        if(slow === fast) return true
    }
    return false
}
