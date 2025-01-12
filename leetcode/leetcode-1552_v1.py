"""
Problem 1552: Magnetic Force Between Two Balls

Version: Original

Constraints:
    1. 2 <= total <= |positions| <= 10^5
    2. 1 <= positions[i] <= 10^9
    3. positions[i] != positions[j] for all i,j where i != j.
"""

# TODO: Make solution into a pure function.
# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.

# NOTE: Solution is not a pure function.

from math import ceil


class Solution:
    def maxDistance(self, positions: list[int], total: int) -> int:
        """
        Function: max_distance
        Algorithmic Paradigm: Greedy (Binary Search)
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(|positions|*log(|positions|).
            - Space: O(1).
        """
        positions.sort()
        min_gap: int = find_min_gap(positions)
        max_gap: int = find_max_gap(positions, total)
        while min_gap < max_gap:
            mid_gap: int = ceil((min_gap + max_gap) / 2)
            if gaps_fit(positions, mid_gap, total - 1):
                min_gap = mid_gap
            else:
                max_gap = mid_gap - 1
        return min_gap


# Helpers
# ===========================================================================
def find_min_gap(positions: list[int]) -> int:
    result: int = positions[1] - positions[0]
    for i in range(2, len(positions)):
        result = min(result, positions[i] - positions[i - 1])
    return result


def find_max_gap(positions: list[int], selections: int) -> int:
    result: int = 0
    gap: int = 0
    gap_points: int = len(positions) - selections + 2
    for i in range(1, gap_points):
        gap += positions[i] - positions[i - 1]
    result = gap
    for i in range(gap_points, len(positions)):
        gap -= positions[i - gap_points + 1] - positions[i - gap_points]
        gap += positions[i] - positions[i - 1]
        result = max(result, gap)
    return result


def gaps_fit(positions: list[int], target_gap: int, amount: int) -> bool:
    gap_count: int = 0
    current_gap: int = 0
    for i in range(len(positions) - 1):
        current_gap += positions[i + 1] - positions[i]
        if current_gap >= target_gap:
            gap_count += 1
            current_gap = 0
            if gap_count == amount:
                return True
    return False
