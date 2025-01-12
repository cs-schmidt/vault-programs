"""
Problem 450: Delete Node in a BST

Version: Optimized

Constraints:
    1. The number of nodes in the tree is in the range [0, 10^4].
    2. -10^5 <= Node.val <= 10^5
    3. Each node has a unique value.
    4. root is a valid binary search tree.
    5. -10^5 <= key <= 10^5
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
    def deleteNode(self, root: Optional["TreeNode"], key: int) -> TreeNode:
        """
        Function: deleteNode
        Algorithmic Paradigm: ???
        Programming Paradigm: ???
        Complexity:
          - Time: ???.
          - Space: ???.
        """
        return root
