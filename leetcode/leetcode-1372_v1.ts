/**
 * Problem 1372: Longest ZigZag Path in a Binary Tree
 *
 * Version: Original
 *
 * Constraints:
 *   1. The number of nodes in the tree is in the range [1, 5 * 10^4].
 *   2. 1 <= Node.val <= 100
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.
// FIXME: Eliminate errors reported by TS compiler.

/** Represents a binary-tree node. */
class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

/**
 * Function: longestZigZag
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(nodes).
 *   - Space: O(nodes).
 */
function longestZigZag(root: TreeNode): number {
  let result = 0;
  const orders: [TreeNode, -1 | 1][] = [
    [root, -1],
    [root, 1],
  ];
  while (orders.length) {
    let [node, direction] = orders.shift();
    const zigzag: TreeNode[] = [];
    zigzag.push(node);
    if (direction === -1) node = node.left;
    else node = node.right;
    direction *= -1;
    while (node) {
      zigzag.push(node);
      if (direction === -1) {
        if (node.right) orders.push([node, 1]);
        node = node.left;
      } else {
        if (node.left) orders.push([node, -1]);
        node = node.right;
      }
      direction *= -1;
    }
    if (zigzag.length - 1 > result) result = zigzag.length - 1;
  }
  return result;
}

export {};
