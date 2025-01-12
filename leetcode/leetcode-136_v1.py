"""
Problem 136: Single Number

Version: Original

Constraints:
    1. 1 <= nums.length <= 3 * 10^4
    2. -3 * 10^4 <= nums[i] <= 3 * 10^4
    3. Each element in the array appears twice except for one element that appears once.
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.

"""
The solution exploits the commutative property of the bitwise XOR operator. Since XOR is
commutative, the output of "XORing" all the elements of `nums` together will be the same
regardless of the order. The same number "XORed" with itself is 0, so you can imagine
rearranging all the elements of `nums` so that equal values are beside each other.
"XORing" all these pairs of equal values cancels out, and the "single number" in `nums`
(the one which does not occur twice) will be "XORed" with 0, so it just equals itself.
Therefore, the output of "XORing" all the elements together will equal the single number,
and we return it as the result.
"""

from functools import reduce
from operator import xor


class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        """
        Function: singleNumber
        Algorithmic Paradigm: ???
        Programming Paradigm: Declarative
        Complexity:
            - Time: O(n) and Ω(1).
            - Space: Θ(1).
        """
        return reduce(xor, nums)
