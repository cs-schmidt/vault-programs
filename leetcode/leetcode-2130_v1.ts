/**
 * Problem 2130: Maximum Twin Sum of a Linked List
 *
 * Version: Original
 *
 * Constraints:
 *   1. The number of nodes in the list is an even integer in the range [2, 10^5].
 *   2. 1 <= Node.val <= 105
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.
// FIXME: Eliminate errors reported by TS compiler.

/** Represents a node in a singly-linked list. */
class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

/**
 * Function: pairSum
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(n).
 */
function pairSum(head: ListNode | null): number {
  let result = 0;
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  while (values.length > 1) result = Math.max(values.shift() + values.pop(), result);
  return result;
}

export {};
