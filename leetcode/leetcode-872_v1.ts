/**
 * Problem 872: Leaf-Similar Trees
 *
 * Version: Original
 *
 * Constraints:
 *   1. The number of nodes in each tree will be in the range [1, 200].
 *   2. Both of the given trees will have values in the range [0, 200].
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
 * Function: leafSimilar
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const tree1History: TreeNode[] = [];
  const tree2History: TreeNode[] = [];
  let tree1Node: TreeNode | null = root1;
  let tree2Node: TreeNode | null = root2;
  let tree1LeafVal: number | null = null;
  let tree2LeafVal: number | null = null;
  do {
    while ((tree1Node !== null || tree1History.length > 0) && !tree1LeafVal) {
      while (tree1Node !== null) {
        tree1History.push(tree1Node);
        tree1Node = tree1Node.left;
      }
      if (!tree1History.at(-1).left && !tree1History.at(-1).right)
        tree1LeafVal = tree1History.at(-1).val;
      tree1Node = tree1History.pop().right;
    }
    while ((tree2Node !== null || tree2History.length > 0) && !tree2LeafVal) {
      while (tree2Node !== null) {
        tree2History.push(tree2Node);
        tree2Node = tree2Node.left;
      }
      if (!tree2History.at(-1).left && !tree2History.at(-1).right)
        tree2LeafVal = tree2History.at(-1).val;
      tree2Node = tree2History.pop().right;
    }
    if (tree1LeafVal !== tree2LeafVal) return false;
    tree1LeafVal = null;
    tree2LeafVal = null;
  } while (tree1History.length > 0 || tree2History.length > 0);
  return true;
}

export {};
