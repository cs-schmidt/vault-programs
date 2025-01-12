"""
Problem 129: Sum Root to Leaf Numbers

Version: Optimized

Constraints:
    1. The size of the tree is in the range [1, 1000]
    2. 0 <= Node.val <= 9
    3. The depth of the tree will not exceed 10.
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
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        """
        Function: sumNumbers
        Algorithmic Paradigm: ???
        Programming Paradigm: ???
        Complexity:
          - Time: ???.
          - Space: ???.
        """
        return root
