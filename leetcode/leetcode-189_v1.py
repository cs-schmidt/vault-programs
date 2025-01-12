"""
Problem 189: Rotate Array

Version: Original

Constraints:
    1. 1 <= nums.length <= 105
    2. -2^31 <= nums[i] <= 2^31 - 1
    3. 0 <= k <= 10^5
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.


class Solution:
    def rotate(self, arr: list[int], k: int) -> list[int]:
        """
        Function: rotate
        Algorithmic Paradigm: ???
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(k mod |arr|).
            - Space: Θ(1).
        """
        for _ in range(k % len(arr)):
            arr.insert(0, arr.pop())
        return arr
