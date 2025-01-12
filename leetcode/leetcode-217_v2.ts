/**
 * Problem 217: Contains Duplicates
 *
 * Version: Optimized
 *
 * Constraints:
 *   1. 1 <= nums.length <= 10^5
 *   2. -10^9 <= nums[i] <= 10^9
 */

// TODO: Finish solution.

/**
 * Function: duplicateExistsIn
 * Algorithmic Paradigm: ???
 * Programming Paradigm: ???
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
function containsDuplicate(nums: number[]): boolean {
  const amountUnique = new Set(nums).size;
  return amountUnique != nums.length;
}

export {};
