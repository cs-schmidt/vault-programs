"""
Problem 2352: Equal Row and Column Pairs

Version: Original

Constraints:
    1. n == grid.length == grid[i].length
    2. 1 <= n <= 200
    3. 1 <= grid[i][j] <= 10^5
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.


class Solution:
    def equalPairs(self, grid: list[list[int]]) -> int:
        """
        Function: equal_pairs
        Algorithmic Paradigm: ???
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(n^2).
            - Space: O(n).
        """
        result = 0
        for rowIdx in range(len(grid)):
            row = grid[rowIdx]
            for colIdx in range(len(grid[0])):
                col = list(map(lambda row: row[colIdx], grid))
                result += 1 if row == col else 0
        return result
