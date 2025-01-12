/**
 * Problem 199: Binary Tree Right Side View
 *
 * Version: Original
 *
 * Constraints:
 *   1. The number of nodes in the tree is in the range [0, 100].
 *   2. -100 <= Node.val <= 100
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * The solution utilizes breadth-first traversal to store the rightmost value at each
 * level in the binary tree. Then, the resulting array of these values is returned.
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
 * Function: rightSideView
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative.
 * Complxity:
 *   - Time: O(nodes).
 *   - Space: O(treeWidth).
 */
function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];
  const rightSideValues: number[] = [];
  const nodesAtLevel: TreeNode[] = [root];
  let nodeCountAtLevel = 1;
  while (nodeCountAtLevel) {
    const node: TreeNode = nodesAtLevel.shift() as TreeNode;
    nodeCountAtLevel -= 1;
    if (node.left) nodesAtLevel.push(node.left);
    if (node.right) nodesAtLevel.push(node.right);
    if (nodeCountAtLevel === 0) {
      rightSideValues.push(node.val);
      nodeCountAtLevel = nodesAtLevel.length;
    }
  }
  return rightSideValues;
}

export {};
