"""
Problem 714: Best Time to Buy and Sell Stock with Transaction Fee

Version: Original

Constraints:
    1. 1 <= prices.length <= 5 * 10^4
    2. 1 <= prices[i] < 5 * 10^4
    3. 0 <= fee < 5 * 10^4
"""


class Solution:
    def maxProfit(self, prices: list[int], fee: int) -> int:
        """
        Function: max_profit
        Algorithmic Paradigm: Bottom-Up 2D Dynamic Programming
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(n) and Ω(1).
            - Space: Θ(1).
        """
        if len(prices) <= 1:
            return 0
        maxGainWithBuy = -prices[0]
        maxGainWithSell = 0
        for day in range(1, len(prices)):
            lastMaxGainWithBuy = maxGainWithBuy
            maxGainWithBuy = max(maxGainWithBuy, maxGainWithSell - prices[day])
            maxGainWithSell = max(maxGainWithSell, lastMaxGainWithBuy + prices[day] - fee)
        return max(maxGainWithBuy, maxGainWithSell)


"""
Dynamic Programming Outline:
======================================================================
Base Cases:
    1. MP(0,b) == -p[0].
    2. MP(0,s) == 0.

Subproblems:
    1. MP(i,b) == max{MP(0,s), ... , MP(i-1,s)} - p[i].
    2. MP(i,s) == max{MP(0,b), ... , MP(i-1,b)} + p[i] - 2.
"""
