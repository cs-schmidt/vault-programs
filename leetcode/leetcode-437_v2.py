"""
Problem 437: Path Sum III

Version: Optimized

Constraints:
    1. The number of nodes in the tree is in the range [0, 1000].
    2. -10^9 <= Node.val <= 10^9
    3. -1000 <= targetSum <= 1000
"""

# TODO: Finish solution.


from dataclasses import dataclass
from typing import Optional
from functools import reduce


@dataclass
class TreeNode:
    """Represents a binary-tree node."""

    val: int = 0
    left: Optional["TreeNode"] = None
    right: Optional["TreeNode"] = None


class Solution:
    def pathSum(self, root: Optional["TreeNode"], target_sum: int) -> int:
        """
        Function: pathSum
        Algorithmic Paradigm: ???
        Programming Paradigm: ???
        Complexity:
          - Time: ???.
          - Space: ???.
        """
        return 00
