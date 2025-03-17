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

function reverseList(head: ListNode | null): ListNode | null {
    let current: ListNode = head;
    let prev: ListNode = null;

    if (!head)  {
        return null;
    }

    if (!head.next) {
        return head;
    }

    while (current) {
        let next: ListNode = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev; // since head still points to the first disjoint node
};