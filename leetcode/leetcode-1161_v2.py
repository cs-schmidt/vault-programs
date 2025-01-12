"""
Problem 1161: Maximum Level Sum of a Binary Tree

Version: Optimized

Constraints:
    1. The number of nodes in the tree is in the range [1, 10^4].
    2. -10^5 <= Node.val <= 10^5
"""

# TODO: Finish solution.

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
        Programming Paradigm: ???
        Complexity:
            - Time: O(nodes).
            - Space: O(width).
        """
        return 0
