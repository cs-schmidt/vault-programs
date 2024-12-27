/**
 * Problem 21: Merge Two Sorted Lists
 *
 * Version: Original
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
 * Algorithmic Paradigm: Linear Recursion Technique
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time (Mean): O(max{|l1|, |l2|})
 *   - Space (Mean): O(max{|l1|, |l2|}) auxiliary space.
 */
function mergeTwoLists(node1: ListNode | null, node2: ListNode | null): ListNode | null {
  if (node1 === null) return node2;
  if (node2 === null) return node1;
  return node1.val <= node2.val
    ? new ListNode(node1.val, mergeTwoLists(node1.next, node2))
    : new ListNode(node2.val, mergeTwoLists(node1, node2.next));
}

export {};
