"""
Problem 67: Add Binary

Version: Original

Constraints:
    1. 1 <= a.length, b.length <= 10^4
    2. a and b consist only of '0' or '1' characters.
    3. Each string does not contain leading zeros except for the zero itself.
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.

import math


class Solution:
    def addBinary(self, a: str, b: str) -> str:
        """
        Function: addBinaryStrings
        Algorithmic Paradigm: ???
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(max{|a|,|b|}) and Ω(1).
            - Space: Θ(1).
        """
        result: str = ""
        bit_place: int = -1
        bit_carry: int = 0
        while abs(bit_place) <= min(len(a), len(b)):
            bit_sum = int(a[bit_place]) + int(b[bit_place]) + bit_carry
            result = str(bit_sum % 2) + result
            bit_carry = math.floor(bit_sum / 2)
            bit_place -= 1
        if len(a) > len(b):
            while abs(bit_place) <= len(a):
                bit_sum = int(a[bit_place]) + bit_carry
                result = str(bit_sum % 2) + result
                bit_carry = math.floor(bit_sum / 2)
                bit_place -= 1
        else:
            while abs(bit_place) <= len(b):
                bit_sum = int(b[bit_place]) + bit_carry
                result = str(bit_sum % 2) + result
                bit_carry = math.floor(bit_sum / 2)
                bit_place -= 1
        if bit_carry:
            result = str(bit_carry) + result
        return result
