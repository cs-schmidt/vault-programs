/**
 * Problem 662: Maximum Width of Binary Tree
 *
 * Version: Original
 *
 * Constraints:
 *   1. The number of nodes in the tree is in the range [1, 3000].
 *   2. -100 <= Node.val <= 100.
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

/** An ordered pair containing a node and associated index number. */
type IndexedNode = [TreeNode, number];

/**
 * Function: getBinaryTreeWidth
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(nodes).
 *   - Space: O(width).
 */
function widthOfBinaryTree(root: TreeNode) {
  let max = 1;
  const levelNodes: IndexedNode[] = [[root, 0]];
  while (levelNodes.length !== 0) {
    let levelSize = levelNodes.length;
    const leftmostLevelIndex = levelNodes[0][1];
    const rightmostLevelIndex = levelNodes.at(-1)[1];
    max = Math.max(max, rightmostLevelIndex - leftmostLevelIndex + 1);
    while (levelSize > 0) {
      const node: IndexedNode = levelNodes.shift();
      if (node[0].left) levelNodes.push([node[0].left, 2 * (node[1] - 1) + 1]);
      if (node[0].right) levelNodes.push([node[0].right, 2 * (node[1] - 1) + 2]);
      levelSize -= 1;
    }
  }
  return max;
}

export {};
