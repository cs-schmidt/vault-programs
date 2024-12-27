/**
 * Problem 1: Two Sum
 *
 * Version: Optimized
 *
 * Constraints:
 *   1. 2 <= nums.length <= 10^4
 *   2. -10^9 <= nums[i] <= 10^9
 *   3. -10^9 <= target <= 10^9
 *   4. Only one valid answer exists.
 */

// Making `numIndexMap` a plain JS object without a prototype chain will enhance the
// performance of the "in" operator. This approach appears to render optimal time
// complexity for this problem. Using a Map type seems to diminish performance here.

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
  const numIndexMap = Object.create(null);
  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    if (complement in numIndexMap) return [numIndexMap[complement], index];
    if (!(nums[index] in numIndexMap)) numIndexMap[nums[index]] = index;
  }
  return [];
}

export {};
