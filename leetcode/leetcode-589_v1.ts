/**
 * Problem 589: N-ary Preorder Traversal
 *
 * Version: Original
 *
 * Constraints:
 *   1. The number of nodes in the tree is in the range [0, 10^4].
 *   2. 0 <= Node.val <= 10^4
 *   3. The height of the n-ary tree is less than or equal to 1000
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/** Represents a node in an n-ary tree. */
class Node {
  children: Node[];
  constructor(public val: number = 0) {
    this.children = [];
  }
}

/**
 * Function: getPreorderImage
 * Algorithmic Paradigm: Recursion
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time: O(nodes).
 *   - Space: O(height).
 */
function preorder(root: Node | null): number[] {
  return root ? [root.val].concat(...root.children.map(preorder)) : [];
}

export {};
