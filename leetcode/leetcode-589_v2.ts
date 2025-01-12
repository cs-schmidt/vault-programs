/**
 * Problem 589: N-ary Preorder Traversal
 *
 * Version: Optimized
 *
 * Constraints:
 *   1. The number of nodes in the tree is in the range [0, 10^4].
 *   2. 0 <= Node.val <= 10^4
 *   3. The height of the n-ary tree is less than or equal to 1000
 */

// TODO: Finish solution.

/** Represents a node in an n-ary tree. */
class Node {
  children: Node[];
  constructor(public val: number = 0) {
    this.children = [];
  }
}

/**
 * Function: getPreorderImage
 * Algorithmic Paradigm: ???
 * Programming Paradigm: ???
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
function preorder(root: Node | null): number[] {
  return [];
}

export {};
