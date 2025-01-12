"""
Problem 98: Validate Binary Search Tree

Version: Optimized

Constraints:
    1. The number of nodes in the tree is in the range [1, 10^4].
    2. -2^31 <= Node.val <= 2^31 - 1
"""

# TODO: Finish solution.

from dataclasses import dataclass
from typing import Optional


@dataclass
class TreeNode:
    """Represents a binary-tree node."""

    val: int = 0
    left: Optional["TreeNode"] = None
    right: Optional["TreeNode"] = None


class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        """
        Function: isValidBST
        Algorithmic Paradigm: ???
        Programming Paradigm: ???
        Complexity:
            - Time: ???.
            - Space: ???.
        """
        return False
