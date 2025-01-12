/**
 * Problem 121: Best Time to Buy and Sell a Stock
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= prices.length <= 10^5
 *   2. 0 <= prices[i] <= 10^4
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.

/**
 * Function: maxProfit
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n) and Ω(1).
 *   - Space: Θ(1).
 */
function maxProfit(prices: number[]): number {
  let result = 0;
  let entryCost = prices[0];
  for (const exitCost of prices) {
    if (entryCost > exitCost) entryCost = exitCost;
    else if (exitCost - entryCost > result) result = exitCost - entryCost;
  }
  return result;
}

export {};
