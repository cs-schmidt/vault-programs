/**
 * Problem 2095: Delete the Middle Node of a Linked List
 *
 * Version: Original
 *
 * Constraints:
 *   1. The number of nodes in the list is in the range [1, 10^5].
 *   2. 1 <= Node.val <= 10^5
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
 * Function: deleteMiddle
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(1).
 */
function deleteMiddle(head: ListNode | null): ListNode | null {
  const result: ListNode | null = head.next ? head : null;
  let size = 0;
  let node: ListNode = head;
  while (node?.val) {
    size += 1;
    node = node.next;
  }
  if (size) {
    let prevNode: ListNode | null = head;
    let midNode: ListNode | null = head;
    for (let i = 0; i < Math.floor(size / 2); i++) {
      prevNode = midNode;
      midNode = midNode.next;
    }
    prevNode.next = midNode.next;
  }
  return result;
}

export {};
