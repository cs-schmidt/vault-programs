"""
Problem 1161: Maximum Level Sum of a Binary Tree

Version: Original

Constraints:
    1. The number of nodes in the tree is in the range [1, 10^4].
    2. -10^5 <= Node.val <= 10^5
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.

from typing import Optional
from collections import deque


class TreeNode:
    """Represents a binary-tree node."""

    val: int = 0
    left: Optional["TreeNode"] = None
    right: Optional["TreeNode"] = None


class Solution:
    def maxLevelSum(self, root: TreeNode) -> int:
        """
        Function max_level_sum
        Algorithmic Paradigm: ???
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(nodes).
            - Space: O(width).
        """
        level = 1
        levelSum: int = 0
        maxLevelSum: int = root.val
        levelNodes = deque([root])
        nextLevelNodes = deque()
        result = 1
        while levelNodes or nextLevelNodes:
            while levelNodes:
                node = levelNodes.popleft()
                if node.left:
                    nextLevelNodes.append(node.left)
                if node.right:
                    nextLevelNodes.append(node.right)
                levelSum += node.val
            if levelSum > maxLevelSum:
                maxLevelSum = levelSum
                result = level
            levelNodes = nextLevelNodes
            nextLevelNodes = deque()
            level += 1
            levelSum = 0
        return result
