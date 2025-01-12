"""
Problem 2300: Successful Pairs of Spells and Potions

Version: Original

Constraints:
    1. n == spells.length
    2. m == potions.length
    3. 1 <= n, m <= 10^5
    4. 1 <= spells[i], potions[i] <= 10^5
    5. 1 <= target <= 10^10
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.

from math import floor, ceil


class Solution:
    def successfulPairs(
        self, spells: list[int], potions: list[int], target: int
    ) -> list[int]:
        """
        Function: successful_pairs
        Algorithmic Paradigm: ???
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(max{|p|*log(|p|), |s|*log(|s|)}); where p = potions and s = spells.
            - Space: O(|spells|).
        """
        result: list[int] = []
        potions.sort()
        for spell in spells:
            successful_pairs = 0
            min_strength = ceil(target / spell)
            min_potion = least_geq(potions, min_strength)
            if min_potion != None:
                successful_pairs = len(potions) - min_potion
            result.append(successful_pairs)
        return result


# Helpers
# ===========================================================================
def least_geq(arr: list[int], target: int) -> int:
    """
    Returns the index of the smallest x in 'arr', such that 'x >= target'. If such a value
    doesn't exist, then 'None' is returned instead.
    """
    if not (target <= arr[len(arr) - 1]):
        return None
    high, low = len(arr) - 1, 0
    result = high
    while low <= high:
        mid = floor((high + low) / 2)
        if arr[mid] == target:
            result = mid
            high = mid - 1
        elif arr[mid] < target:
            low = mid + 1
        else:
            if arr[mid] <= arr[result]:
                result = mid
            high = mid - 1
    return result
