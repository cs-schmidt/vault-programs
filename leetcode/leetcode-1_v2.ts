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

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.

/**
 * Using a plain JavaScript object without a prototype chain enhances the performance of
 * the "in" operator, offering better runtime efficiency compared to a Map object.
 */

/**
 * Function: findTwoSum
 * Algorithmic Paradigm: Greedy (One-Pass Hashing)
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n) and Ω(1).
 *   - Space: Θ(1).
 */
function twoSum(nums: number[], target: number): number[] {
  const numIndexMap = Object.create(null);
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numIndexMap) return [numIndexMap[complement], i];
    if (!(nums[i] in numIndexMap)) numIndexMap[nums[i]] = i;
  }
  return [];
}

export {};
