/**
 * Problem 1: Two Sum
 *
 * Constraints:
 *   1. 2 <= nums.length <= 10^4
 *   2. -10^9 <= nums[i] <= 10^9
 *   3. -10^9 <= target <= 10^9
 *   4. Only one valid answer exists.
 */

// NOTE: Making `numIdxMap` a plain JS object without a prototype chain enhances the
//       performance of the "in" operator. This approach seems to render optimal time
//       complexity for this problem. Using a Map type seems to diminish performance.

/**
 * Function: findTwoSum
 * Algorithmic Paradigm: Greedy w/ One-Pass Hashing
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time (Worst): O(n).
 *   - Time (Best): O(1).
 *   - Space (Worst): O(n) auxiliary space.
 *   - Space (Best): O(1) auxiliary space.
 */
function twoSum(nums: number[], target: number): number[] {
  const numIdxMap = Object.create(null);
  for (let idx = 0; idx < nums.length; idx++) {
    const complement = target - nums[idx];
    if (complement in numIdxMap) return [numIdxMap[complement], idx];
    if (!(nums[idx] in numIdxMap)) numIdxMap[nums[idx]] = idx;
  }
  return [];
}

export {};
