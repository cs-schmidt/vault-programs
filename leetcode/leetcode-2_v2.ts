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

// TODO: Finish solution.

// NOTE: Use an approach similar to your original solution.

/** Represents a node in a singly-linked list. */
class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

/**
 * Function: getDigitsOfSum
 * Algorithmic Paradigm: Greedy (Linear Iteration)
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(max{|l1|,|l2|}) and Ω(1).
 *   - Space: Θ(max{|l1|,|l2|}).
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return null;
}

export {};
