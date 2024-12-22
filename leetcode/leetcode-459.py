"""
Problem 459: Repeated Substring Pattern

Constraints:
    1. 1 <= len(str) <= 10^4
    2. str contains only lowercase English letters.
"""

# TODO: Improve solution's time complexity.
# NOTE: There's an alternative approach with O(1) auxiliary space and better time.

from collections import deque


class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        """
        Function: is_patterned_string
        Algorithmic Paradigm: Brute-Force Search
        Programming Paradigm: Imperative
        Complexity:
            - Time (Mean): O(n*ln(n)).
            - Time (Best): O(n).
            - Time (Worst): O(n*sqrt(n)).
            - Space (Mean): O(sqrt(n)) auxiliary space.
        """
        viable_sizes: deque[int] = deque(self.possible_pattern_sizes(s))
        while viable_sizes:
            size: int = viable_sizes.popleft()
            head: int = size
            while self.divides(size, head):
                for i in range(size):
                    if s[head] != s[i]: break
                    head += 1
                if head == len(s): return True
                if not self.divides(size, head) or s[head] != s[0]: break
        return False

    def possible_pattern_sizes(self, s: str) -> list[int]:
        possible_sizes: list[int] = []
        max_size_viable: int = len(s) // (2 if self.is_even(len(s)) else 3)
        for i in range(1, max_size_viable + 1):
            if s[i] == s[0] and self.divides(i, len(s)): possible_sizes.append(i)
        return possible_sizes

    def is_even(self, num: int) -> bool:
        return self.divides(2, num)

    def divides(self, num_1: int, num_2: int) -> bool:
        return num_2 % num_1 == 0
