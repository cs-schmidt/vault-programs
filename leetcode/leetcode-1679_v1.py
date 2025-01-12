"""
Problem 1679: Max Number of K-Sum Pairs

Version: Original

Constraints:
    1. 1 <= nums.length <= 10^5
    2. 1 <= nums[i] <= 10^9
    3. 1 <= k <= 10
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.

import math


class Solution:
    def maxOperations(self, nums: list[int], k: int) -> int:
        """
        Function:  max_operations
        Algorithmic Paradigm: ???
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(n).
            - Space: O(n).
        """
        result = 0
        freqs = generate_frequencies(nums, k)
        while len(freqs):
            key, freq = freqs.popitem()
            target = str(k - int(key))
            if key != target:
                result += min(freq, freqs[target])
                del freqs[target]
            else:
                if not (freq % 2 == 0):
                    result += math.floor((freq - 1) / 2)
                else:
                    result += math.floor(freq / 2)
        return result


# Helpers
# ===========================================================================
def generate_frequencies(nums: list[int], k: int) -> dict[int]:
    freqs = {}
    for num in nums:
        if str(num) in freqs:
            freqs[str(num)] += 1
        else:
            freqs[str(num)] = 1
    return dict(filter(lambda pair: str(k - int(pair[0])) in freqs, freqs.items()))
