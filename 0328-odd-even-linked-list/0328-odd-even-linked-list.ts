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

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head)  {
        return null;
    }

    if (!head.next) {
        return head;
    }

    let oddPtr: ListNode = head;
    let evenPtr: ListNode = head.next;
    let splitPtr: ListNode = head.next;
    
    while (oddPtr && oddPtr.next && evenPtr && evenPtr.next)  {
        oddPtr.next = oddPtr.next.next;
        oddPtr = oddPtr.next;

        evenPtr.next = evenPtr.next.next;
        evenPtr = evenPtr.next;
    }

    oddPtr.next = splitPtr;

    return head;
};