/**
 * Problem 142: Linked List Cycle II
 *
 * Version: Original
 *
 * Constraints:
 *   1. Don't modify the linked list passed.
 *   2. The number of the nodes in the list is in the range [0, 10^4].
 *   3. -10^5 <= Node.val <= 10^5.
 *   4. pos is -1 or a valid index in the linked-list.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.

/** Represents a node in a singly-linked list. */
class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

/**
 * Function: detectCycle
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(nodes) and Ω(1).
 *   - Space: O(nodes) and Ω(1).
 */
function detectCycle(head: ListNode | null): ListNode | null {
  let node: ListNode | null = head;
  const nodes: Set<ListNode | null> = new Set();
  while (node && !nodes.has(node)) {
    nodes.add(node);
    node = node?.next;
  }
  return node || null;
}

export {};
