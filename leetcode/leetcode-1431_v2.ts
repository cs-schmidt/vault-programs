/**
 * Problem 1431: Kids With the Greatest Number of Candies
 *
 * Version: Optimized
 *
 * Constraints:
 *   1. 2 <= n <= 100
 *   2. 1 <= candies[i] <= 100
 *   3. 1 <= extra <= 50
 */

// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: kids_reaching_candy_peak
 * Algorithmic Paradigm: Greedy
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(n).
 */
function kidsWithCandies(candies: number[], extra: number): boolean[] {
  const peak = Math.max(...candies);
  return candies.map(reachesPeakTest(peak, extra));

  // ===========================================================================
  function reachesPeakTest(peak: number, extra: number): (amount: number) => boolean {
    return (amount) => amount + extra >= peak;
  }
}

export {};
