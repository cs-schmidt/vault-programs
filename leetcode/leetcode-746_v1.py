"""
Problem 746: Min Cost Climbing Stairs

Version: Original

Constraints:
    1. 2 <= cost.length <= 1000
    2. 0 <= cost[i] <= 999
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.


class Solution:
    def minCostClimbingStairs(self, stepCosts: list[int]) -> int:
        """
        Function: min_cost_climbing_stairs
        Algorithmic Paradigm: Dynamic Programming
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(n).
            - Space: O(1).
        """
        costParts: list[int] = [stepCosts[-2], stepCosts[-1]]
        for i in range(len(stepCosts) - 3, -1, -1):
            stepMin = stepCosts[i] + min(costParts)
            costParts[1] = costParts[0]
            costParts[0] = stepMin
        return min(costParts)
