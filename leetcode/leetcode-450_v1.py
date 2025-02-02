"""
Problem 450: Delete Node in a BST

Version: Original

Constraints:
    1. The number of nodes in the tree is in the range [0, 10^4].
    2. -10^5 <= Node.val <= 10^5
    3. Each node has a unique value.
    4. root is a valid binary search tree.
    5. -10^5 <= key <= 10^5
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.

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
        Programming Paradigm: Imperative
        Complexity:
          - Time: O(height).
          - Space: O(1).
        """
        if not root: return None
        node: Optional["TreeNode"] = root
        parent_node: TreeNode = root
        while node and node.val != key:
            parent_node = node
            if node.val < key: node = node.right
            else: node = node.left
        if not node: return root
        if parent_node == node:
            if node.left and node.right:
                parent_node = node.right
                child_node: TreeNode = node.left
                node = parent_node
                while node.left: node = node.left
                node.left = child_node
                return parent_node
            elif node.left: return node.left
            elif node.right: return node.right
            else: return None
        else:
            if parent_node.left == node:
                if node.left and node.right:
                    child_node: TreeNode = node.left
                    node = node.right
                    parent_node.left = node
                    while node.left: node = node.left
                    node.left = child_node
                elif node.left: parent_node.left = node.left
                elif node.right: parent_node.left = node.right
                else: parent_node.left = None
            else:
                if node.left and node.right:
                    child_node: TreeNode = node.left
                    node = node.right
                    parent_node.right = node
                    while node.left: node = node.left
                    node.left = child_node
                elif node.left: parent_node.right = node.left
                elif node.right: parent_node.right = node.right
                else: parent_node.right = None
        return root