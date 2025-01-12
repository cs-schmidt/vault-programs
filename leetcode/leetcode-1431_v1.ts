/**
 * Problem 1431: Kids With the Greatest Number of Candies
 *
 * Version: Original
 *
 * Constraints:
 *   1. 2 <= n <= 100
 *   2. 1 <= candies[i] <= 100
 *   3. 1 <= extra <= 50
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: kids_reaching_candy_peak
 * Algorithmic Paradigm: Greedy
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(n).
 */
function kidsWithCandies(candies: number[], extra: number): boolean[] {
  const result: boolean[] = [];
  const peak = Math.max(...candies);
  for (const amount of candies) result.push(amount + extra >= peak);
  return result;
}

export {};
