/**
 * Problem 2: Add Two Numbers
 *
 * Version: Optimized
 *
 * Constraints:
 *   1. The number of nodes in each linked list is in the range [1, 100].
 *   2. 0 <= Node.val <= 9
 *   3. It's guaranteed that the list represents a number that doesn't have leading zeros.
 */

// TODO: Finish solution (optimized version).

/** Represents a node in a singly-linked list. */
class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

/**
 * Function: getDigitsOfSum
 * Algorithmic Paradigm: Greedy w/ Linear Iteration
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time (Worst): O(max{|l1|, |l2|}).
 *   - Time (Best): O(1).
 *   - Time (Mean): O(max{|l1|, |l2|}).
 *   - Space (Mean): O(max{|l1|, |l2|}) auxiliary space.
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return null;
}

export {};
