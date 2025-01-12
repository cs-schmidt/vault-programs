/**
 * Problem 1480: Running Sum of 1D Array
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= nums.length <= 1000
 *   2. -10^6 <= nums[i] <= 10^6
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: runningSum
 * Algorithmic Paradigm: Greedy
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(n).
 */
function runningSum(nums: number[]): number[] {
  let laggingSum = 0;
  return nums.map((num) => (laggingSum += num));
}

export {};
