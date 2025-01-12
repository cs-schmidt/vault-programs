"""
Problem 1732: Find the Highest Altitude

Version: Original/Optimized

Constraints:
    1. n == gain.length
    2. 1 <= n <= 100
    3. -100 <= gain[i] <= 100
"""

# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.


class Solution:
    def largestAltitude(self, gain: list[int]) -> int:
        """
        Function: find_peak_altitude
        Algorithmic Paradigm: Greedy
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(n).
            - Space: O(1).
        """
        last_peak = 0
        elevation = 0
        for elevation_change in gain:
            elevation += elevation_change
            last_peak = max(last_peak, elevation)
        return last_peak
