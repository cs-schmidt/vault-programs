"""
Problem 1493: Longest Subarray of 1's After Deleting One Element

Version: Original

Constraints:
    1. 1 <= bits.length <= 10^5
    2. bits[i] is either 0 or 1
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.


class Solution:
    def longestSubarray(self, bits: list[int]) -> int:
        """
        Function: longest_subarray
        Algorithmic Paradigm: ???
        Programming Paradigm: Imperative
        Complexity:
            - Time: ???.
            - Space: ???.
        """
        result: int = 0
        lower: int = -1
        upper: int = -1
        final: int = len(bits) - 1
        partition: int = 0
        potential: int = final
        upper += 1
        while upper < len(bits) and bits[upper] != 0:
            upper += 1
        partition += (
            upper - lower - 2 if lower == -1 and upper >= len(bits) else upper - lower - 1
        )
        if partition > result:
            result = partition
        while result < potential:
            partition = upper - lower - 1 if upper != -1 else 0
            lower = upper
            potential = partition + (final - upper)
            upper += 1
            while upper < len(bits) and bits[upper] != 0:
                upper += 1
            partition += upper - lower - 1
            if partition > result:
                result = partition
        return result
