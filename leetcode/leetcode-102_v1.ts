/**
 * Problem 102: Binary Tree Level Order Traversal
 *
 * Version: Original
 *
 * Constraints:
 *   1. The number of nodes in the tree is in the range [0, 2000].
 *   2. -1000 <= Node.val <= 1000.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.

/** Represents a binary-tree node. */
class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

/**
 * Function: levelOrderPath
 * Algorithmic Paradigm: Recursion
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(nodes) and Ω(1).
 *   - Space: O(nodes) and Ω(1).
 */
function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  (function appendData(node: TreeNode | null, level: number): void {
    if (!node) return;
    if (!result[level]) result[level] = [];
    result[level].push(node.val);
    if (node.left) appendData(node.left, level + 1);
    if (node.right) appendData(node.right, level + 1);
  })(root, 0);
  return result;
}

export {};
