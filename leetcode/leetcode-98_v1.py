"""
Problem 98: Validate Binary Search Tree

Version: Original

Constraints:
    1. The number of nodes in the tree is in the range [1, 10^4].
    2. -2^31 <= Node.val <= 2^31 - 1
"""

from dataclasses import dataclass
from typing import Optional
import math


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
        Algorithmic Paradigm: Divide-and-Conquer
        Programming Paradigm: Declarative
        Complexity:
            - Time: O(nodes) and Ω(1).
            - Space: O(height) and Ω(1).
        """
        return (
            # Validate left subtree.
            isValidSubtree(root.left, -math.inf, root.val)
            and
            # Validate right subtree.
            isValidSubtree(root.right, root.val, math.inf)
        )


# Helpers
# ===========================================================================
def isValidSubtree(root: TreeNode, lower: int, upper: int) -> bool:
    # Base Case:
    if root == None:
        return True
    # Recursive Case:
    if root.val > lower and root.val < upper:
        return (
            # Validate left subtree.
            isValidSubtree(root.left, lower, root.val)
            and
            # Validate right subtree.
            isValidSubtree(root.right, root.val, upper)
        )
    return False
