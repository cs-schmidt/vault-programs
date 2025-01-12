/**
 * Problem 876: Middle of Linked List
 *
 * Version: Original
 *
 * Constraints:
 *   1. The number of nodes in the list is in the range [1, 100].
 *   2. 1 <= Node.val <= 100.
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
 * Function: middleNode
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
function middleNode(head: ListNode | null): ListNode | null {
  let mNode: ListNode | null = head;
  let endNode: ListNode | null = head;
  let mIndex = 0;
  let endIndex = 0;
  while (endNode?.next) {
    endNode = endNode.next;
    endIndex += 1;
    while (mIndex < Math.ceil(endIndex / 2)) {
      mNode = mNode.next;
      mIndex += 1;
    }
  }
  return mNode;
}

export {};
