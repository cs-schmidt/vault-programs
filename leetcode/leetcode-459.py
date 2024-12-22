"""
Problem 459: Repeated Substring Pattern

Constraints:
    1. 1 <= len(str) <= 10^4
    2. str contains only lowercase English letters.
"""

# TODO: Complete solution.


class Solution:
    def repeatedSubstringPattern(self, str: str) -> bool:
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
        if len(str) <= 1: return False
        bound = 1
        width = 0
        while bound < len(str):
            # Search for the next possible candidate.
            while bound < len(str) and str[bound] != str[0]: bound += 1
            if bound > len(str) // 2: return False
            width = self.distance(bound, 0)
            if len(str) % width != 0:
                bound += 1
                continue
            for i in range(width):
                if str[bound] != str[i]: break
                bound += 1

            # Handle whether or not a candidate was found.
            if bound <= 2 * width - 1: continue
            while bound < len(str):
                steps = 0
                for i in range(width):
                    if str[bound] != str[i]: break
                    bound += 1
                    steps += 1
                if steps < width: break

        return True

    def distance(self, point1: int, point2: int):
        return abs(point1 - point2)
