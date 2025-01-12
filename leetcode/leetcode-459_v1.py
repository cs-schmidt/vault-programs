"""
Problem 459: Repeated Substring Pattern

Version: Original

Constraints:
    1. 1 <= len(str) <= 10^4
    2. str contains only lowercase English letters.
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.

from collections import deque


class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        """
        Function: is_patterned_string
        Algorithmic Paradigm: Brute-Force Search
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(n*sqrt(n)) and Ω(n).
            - Space: O(sqrt(n)).
        """
        viable_sizes: deque[int] = deque(possible_pattern_sizes(s))
        while viable_sizes:
            size: int = viable_sizes.popleft()
            head: int = size
            while divides(size, head):
                for i in range(size):
                    if s[head] != s[i]:
                        break
                    head += 1
                if head == len(s):
                    return True
                if not divides(size, head) or s[head] != s[0]:
                    break
        return False


# Helpers
# ===========================================================================
def possible_pattern_sizes(s: str) -> list[int]:
    possible_sizes: list[int] = []
    max_size_viable: int = len(s) // (2 if is_even(len(s)) else 3)
    for i in range(1, max_size_viable + 1):
        if s[i] == s[0] and divides(i, len(s)):
            possible_sizes.append(i)
    return possible_sizes


def is_even(num: int) -> bool:
    return divides(2, num)


def divides(num_1: int, num_2: int) -> bool:
    return num_2 % num_1 == 0
