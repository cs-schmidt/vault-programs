"""
Problem 238: Product of Array Except Self

Version: Original

Constraints:
    1. 2 <= nums.length <= 10^5
    2. -30 <= nums[i] <= 30
    3. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
       integer.
"""

# TODO: Finish solution.

# NOTE: This algorithm was initially accepted, but threw an error after retesting. It's
#       still incorrect.


class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        """
        Function: productExceptSelf
        Algorithmic Paradigm: ???
        Programming Paradigm: Imperative.
        Complexity:
          - Time: O(n).
          - Space: O(n).
        """
        # 1. Compute leftwards trailing product of 'nums'.
        left_tp: list[int] = [1]
        for i in range(1, len(nums)):
            left_tp.append(left_tp[-1] * nums[i - 1])
        # 2. Compute rightwards trailing product of 'nums'.
        right_tp: list[int] = [1]
        for i in range(len(nums) - 1, 0, -1):
            right_tp.insert(0, right_tp[0] * nums[i])
        # 3. Merge leftwards and rightwards trailing products to produce 'result'.
        return map(lambda l_num, r_num: l_num * r_num, left_tp, right_tp)
