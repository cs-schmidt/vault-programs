/**
 * Problem 104: Maximum Depth of Binary Tree
 *
 * Version: Original
 *
 * Constraints
 *   1. The number of nodes in the tree is in the range [0, 10^4].
 *   2. -100 <= Node.val <= 100
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.

/**
 * This solution is adapted from a recursive depth-first search (DFS) algorithm. We define
 * an internal procedure `recursivePostTraversal()` and a variable `traversalDepth`, then
 * we use the `recursivePostTraversal()` to do a DFS which adjusts `traversalDepth`. The
 * value of `traversalDepth` then compared with the greatest `result` found so far and
 * updated. At the end of things `result` is returned.
 */

/** Represents a binary-tree node. */
class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

/**
 * Function: maxDepthOf
 * Algorithmic Paradigm: Recursion
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(nodes) and Ω(1).
 *   - Space: O(height) and Ω(1).
 */
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let result = 0;
  let traversalDepth = 0;
  (function recursivePostTraversal(node: TreeNode | null): void {
    traversalDepth += 1;
    if (node?.left) recursivePostTraversal(node.left);
    if (node?.right) recursivePostTraversal(node.right);
    if (traversalDepth > result) result = traversalDepth;
    traversalDepth -= 1;
  })(root);
  return result;
}

export {};
