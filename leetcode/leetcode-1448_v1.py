"""
Problem 1448: Count Good Nodes in Binary Tree

Version: Original

Constraints:
    1. The number of nodes in the binary tree is in the range [1, 10^5].
    2. Each node's value is between [-10^4, 10^4].
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.

from typing import Optional


class TreeNode:
    """Represents a binary-tree node."""

    val: int = 0
    left: Optional["TreeNode"] = None
    right: Optional["TreeNode"] = None


class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        """
        Function: goodNodes
        Algorithmic Paradigm: ???
        Programming Paradigm: Imperative
        Complexity:
          - Time: O(nodes).
          - Space: O(height.
        """
        result: int = 0
        pathHistory: list[tuple[TreeNode, int]] = []
        node: TreeNode = root
        pathMax = node.val
        while node != None or len(pathHistory) > 0:
            while node != None:
                if node.val >= pathMax:
                    pathMax = node.val
                    result += 1
                pathHistory.append((node, pathMax))
                node = node.left
            pathMax = pathHistory[-1][1]
            node = pathHistory.pop()[0].right
        return result
