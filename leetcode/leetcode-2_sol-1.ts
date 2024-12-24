/**
 * Problem 2: Add Two Numbers
 *
 * Constraints:
 *   1. The number of nodes in each linked list is in the range [1, 100].
 *   2. 0 <= Node.val <= 9
 *   3. It's guaranteed that the list represents a number that doesn't have leading zeros.
 */

/** Represents a node in a singly-linked list. */
class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

/**
 * Function: getDigitsOfSum
 * Algorithmic Paradigm: Linear Iteration
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time (Worst): O(max{|l1|, |l2|}).
 *   - Time (Best): O(1).
 *   - Time (Mean): O(max{|l1|, |l2|}).
 *   - Space (Mean): O(max{|l1|, |l2|}) auxiliary space.
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const result: ListNode | null = new ListNode();
  let node: ListNode | null = result;
  let sum: number = 0;
  let carry: number = 0;
  while (l1 && l2) {
    sum = l1.val + l2.val + carry;
    carry = Math.floor(sum / 10);
    node.next = new ListNode(sum - 10 * carry);
    node = node.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (l2) l1 = l2;
  while (l1) {
    sum = l1.val + carry;
    carry = Math.floor(sum / 10);
    node.next = new ListNode(sum - 10 * carry);
    node = node.next;
    l1 = l1.next;
  }
  if (carry) node.next = new ListNode(carry);
  return result.next;
}

export {};
