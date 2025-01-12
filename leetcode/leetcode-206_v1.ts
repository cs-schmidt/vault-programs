/**
 * Problem 206: Reverse Linked List
 *
 * Version: Original
 *
 * Constraints:
 *   1. The number of nodes in the list is the range [0, 5000].
 *   2. -5000 <= Node.val <= 5000
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/** Represents a node in a singly-linked list. */
class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

/**
 * Function: reverseList
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(nodes).
 *   - Space: O(1).
 */
function reverseList(head: ListNode | null): ListNode | null {
  let result: ListNode | null = null;
  let node: ListNode | null = head;
  while (typeof node?.val === 'number' || node?.next) {
    result = new ListNode(node.val, result);
    node = node?.next;
  }
  return result;
}

export {};
