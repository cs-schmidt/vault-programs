/**
 * Problem 1480: Running Sum of 1D Array
 *
 * Version: Optimized
 *
 * Constraints:
 *   1. 1 <= nums.length <= 1000
 *   2. -10^6 <= nums[i] <= 10^6
 */

/**
 * Function: runningSum
 * Algorithmic Paradigm: Greedy
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(n).
 */
function runningSum(nums: number[]): number[] {
  const result: number[] = [nums[0]];
  for (let i = 1; i < nums.length; i++) result.push((result.at(-1) as number) + nums[i]);
  return result;
}

export {};
