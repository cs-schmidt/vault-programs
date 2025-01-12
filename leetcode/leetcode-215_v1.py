"""
Problem 215: Kth Largest Element in an Array

Version: Original

Constraints:
    1. 1 <= k <= nums.length <= 10^5
    2. -10^4 <= nums[i] <= 10^4
"""

# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.

import heapq


class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        """
        Function: findKthLargest
        Algorithmic Paradigm: ???
        Programming Paradigm: Imperative.
        Complexity:
            - Time: O(n).
            - Space: O(1).
        """
        heapq.heapify(nums)
        for _ in range(len(nums) - k):
            heapq.heappop(nums)
        return nums[0]
