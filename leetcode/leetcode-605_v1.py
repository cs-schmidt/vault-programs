"""
Problem 605: Can Place Flowers

Version: Original

Constraints:
    1. 1 <= flowerbed.length <= 2 * 10^4
    2. flowerbed[i] is 0 or 1
    3. There are no two adjacent flowers in flowerbed
    4. 0 <= n <= flowerbed.length
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.

import math


class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        """
        Function: flowers_placeable
        Algorithmic Paradigm: ???
        Programming Paradigm: Imperative
        Complexity:
            - Time: ???.
            - Space: ???.
        """
        if n == 0:
            return True
        spaces_found: int = 0
        i: int = 0
        j: int = 0
        while math.ceil((len(flowerbed) - i) / 2) >= n - spaces_found:
            if i == 0:
                while i < len(flowerbed) and flowerbed[i] == 0:
                    if math.ceil(i / 2) >= n:
                        return True
                    i += 1
                if not i < len(flowerbed):
                    return math.ceil(i + 1 / 2) >= n
                spaces_found += math.floor(i / 2)
            j = i + 1
            while j < len(flowerbed) and flowerbed[j] == 0:
                if math.ceil((j - i - 2) / 2) >= n - spaces_found:
                    return True
                j += 1
            if not j < len(flowerbed):
                if flowerbed[j - 1] == 0:
                    return math.floor((j - i - 1) / 2) >= n - spaces_found
                return math.floor((j - i - 2) / 2) >= n - spaces_found
            spaces_found += math.floor((j - i - 2) / 2)
            i = j
        return False
