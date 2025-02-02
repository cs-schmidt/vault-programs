/**
 * Problem 328: Odd Even Linked List
 *
 * Version: Original
 *
 * Constraints:
 *   1. The number of nodes in the linked list is in the range [0, 10^4].
 *   2. -10^6 <= Node.val <= 10^6
 *   3. Solution must use O(n) time complexity and O(1) extra space complexity.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/** Represents a node in a singly-linked list. */
class ListNode {
  /**
   * @param {number} val
   * @param {ListNode|null} next
   */
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Function: oddEvenList
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complxity:
 *   - Time: O(n).
 *   - Space: O(1).
 */
/**
 * @param {ListNode|null} head
 * @return {ListNode|null}
 */
function oddEvenList(head) {
  if (!head || !head.next) return head;
  const oddHead = head;
  const evenHead = head.next;
  let oddTail = oddHead;
  let evenTail = evenHead;
  // Create 'oddList' and 'evenList'.
  let node = evenTail.next;
  let index = 3;
  while (node) {
    if (index % 2 !== 0) {
      oddTail.next = node;
      oddTail = oddTail.next;
    } else {
      evenTail.next = node;
      evenTail = evenTail.next;
    }
    node = node.next;
    index += 1;
  }
  evenTail.next = null;
  // Link odd list to even list.
  oddTail.next = evenHead;
  return oddHead;
}
