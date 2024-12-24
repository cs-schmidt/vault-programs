/**
 * Problem 1: Two Sum
 *
 * Constraints:
 *   1. 2 <= nums.length <= 10^4
 *   2. -10^9 <= nums[i] <= 10^9
 *   3. -10^9 <= target <= 10^9
 *   4. Only one valid answer exists.
 */

/**
 * Function: findTwoSum
 * Algorithmic Paradigm: Brute-Force w/ Two Pointer Technique
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time (Worst): O(n^2).
 *   - Time (Best): O(1).
 *   - Space (Mean): O(1) auxiliary space.
 */
function twoSum(nums: number[], target: number): number[] {
  for (let idx1 = 0; idx1 < nums.length - 1; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < nums.length; idx2++) {
      if (nums[idx1] + nums[idx2] === target) return [idx1, idx2];
    }
  }
  return [];
}

export {};
