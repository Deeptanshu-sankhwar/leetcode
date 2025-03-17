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


function pairSum(head: ListNode | null): number {
    let length: number = 0;
    let current: ListNode = head;

    while (current) {
        length++;
        current = current.next;
    }

    let mid: number = length / 2;

    current = head;
    let prev: ListNode = null;
    // traverse till right mid
    while (mid > 0) {
        mid--;
        prev = current;
        current = current.next;
    }

    prev.next = null; // break the chain from the middle

    // reverse the left chain
    prev = reverseList(head);

    console.log(prev)

    let max: number = 0;

    while (current) {
        let sum: number = current.val + prev.val;
        max = Math.max(max, sum);
        current = current.next;
        prev = prev.next
    }

    return max;
};