/**
 * Problem 21: Merge Two Sorted Lists
 *
 * Version: Optimized
 *
 * Constraints:
 *   1. The number of nodes in both lists is in the range [0, 50].
 *   2. -100 <= Node.val <= 100
 *   3. Both list1 and list2 are sorted in non-decreasing order.
 */

/** Represents a node in a singly-linked list. */
class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

/**
 * Function: mergeChains
 * Algorithmic Paradigm: Linear Iteration Technique
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time (Mean): O(max{|l1|, |l2|})
 *   - Space (Mean): O(1) auxiliary space.
 */
function mergeTwoLists(node1: ListNode | null, node2: ListNode | null): ListNode | null {
  let tail: ListNode | null = new ListNode();
  let head: ListNode | null = tail;
  while (node1 !== null && node2 !== null) {
    if (node1.val <= node2.val) {
      head.next = node1;
      node1 = node1.next;
    } else {
      head.next = node2;
      node2 = node2.next;
    }
    head = head.next;
  }
  if (node1 !== null) head.next = node1;
  else if (node2 !== null) head.next = node2;
  return tail.next;
}

export {};
