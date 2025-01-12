"""
Problem 1137: N-th Tribonacci Number

Version: Original

Constraints:
    1. 0 <= n <= 37
    2. The answer is guaranteed to fit within a 32-bit integer (i.e. answer <= 2^31 - 1).
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.


class Solution:
    def tribonacci(self, n: int) -> int:
        """
        Function: Tribonacci
        Algorithmic Paradigm: Dynamic Programming
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(n).
            - Space: O(1).
        """
        tribNumParts: list[int] = [0, 1, 1]
        if n < 3:
            return tribNumParts[n]
        for _ in range(n - 2):
            nextTribNum = sum(tribNumParts)
            tribNumParts[0] = tribNumParts[1]
            tribNumParts[1] = tribNumParts[2]
            tribNumParts[2] = nextTribNum
        return tribNumParts[-1]
