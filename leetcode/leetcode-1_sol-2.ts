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
 * Algorithmic Paradigm: Hashing (Greedy)
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time (Worst): O(n).
 *   - Time (Best): O(1).
 *   - Space (Worst): O(n) auxiliary space.
 *   - Space (Best): O(1) auxiliary space.
 */
function twoSum(nums: number[], target: number): number[] {
  const numIdxMap = {};
  for (let idx = 0; idx < nums.length; idx++) {
    const num = nums[idx];
    const complement = target - nums[idx];
    if (numIdxMap[complement] != undefined) return [numIdxMap[complement], idx];
    if (numIdxMap[num] == undefined) numIdxMap[num] = idx;
  }
  return [];
}

export {};
