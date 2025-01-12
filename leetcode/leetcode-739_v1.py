"""
Problem 739: Daily Temperatures

Version: Original

Constraints:
    1. 1 <= temperatures.length <= 10^5
    2. 30 <= temperatures[i] <= 100
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.


class Solution:
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
        """
        Function: dailyTemperatures
        Algorithmic Paradigm: ???
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(n).
            - Space: O(n).
        """
        result: list[int] = []
        daysToBeat: list[int] = []
        for currentDay in range(len(temperatures)):
            while daysToBeat and temperatures[daysToBeat[-1]] < temperatures[currentDay]:
                result[daysToBeat[-1]] = currentDay - daysToBeat[-1]
                daysToBeat.pop()
            result.append(0)
            daysToBeat.append(currentDay)
        return result
