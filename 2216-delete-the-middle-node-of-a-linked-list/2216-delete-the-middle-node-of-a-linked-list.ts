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

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head.next)  { // if only one node exists, delete
        return null;
    }

    let fastPtr: ListNode = head; // moves 2 nodes at a time
    let slowPtr: ListNode = head; // moves 1 node at a time
    let prevPtr: ListNode = null; // store state to be deleted

    while (fastPtr && fastPtr.next) {
        prevPtr = slowPtr;
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }

    prevPtr.next = slowPtr.next; // delete node

    return head;
};