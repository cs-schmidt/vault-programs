/**
 * Problem 700: Search in a Binary Search Tree
 *
 * Version: Original
 *
 * Constraints:
 *   1. The number of nodes in the tree is in the range [1, 5000].
 *   2. 1 <= Node.val <= 10^7
 *   3. root is a binary search tree.
 *   4. 1 <= val <= 10^7.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/** Definition of a binary-tree node. */
class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

/**
 * Function: searchBST
 * Algorithmic Paradigm: Recursion
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time: O(nodes).
 *   - Space: O(height).
 */
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;
  if (root.val === val) return root;
  return searchBST(root.left, val) || searchBST(root.right, val);
}

export {};
