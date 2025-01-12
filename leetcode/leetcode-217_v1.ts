/**
 * Problem 217: Contains Duplicates
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= nums.length <= 10^5
 *   2. -10^9 <= nums[i] <= 10^9
 */

// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: duplicateExistsIn
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n) and Ω(1).
 *   - Space: O(n) and Ω(1).
 */
function containsDuplicate(nums: number[]): boolean {
  const encounteredNums = new Set<number>();
  for (const num of nums) {
    if (encounteredNums.has(num)) return true;
    encounteredNums.add(num);
  }
  return false;
}

export {};
