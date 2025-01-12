/**
 * Problem 53: Maximum Subarray
 *
 * Version: Kadane's Algorithm
 *
 * Constraints:
 *   1. 1 <= nums.length <= 10^5
 *   2. -10^4 <= nums[i] <= 10^4
 */

// TODO: Determine algorithmic paradigm and techniques.

/**
 * Function: maxSubarray
 * Algorithmic Paradigm: Dynamic Programming
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n) and Ω(1).
 *   - Space: Θ(1).
 */
function maxSubArray(nums: number[]): number {
  let maxThusFound = nums[0];
  let maxOnCurrNum = 0;
  for (const num of nums) {
    maxOnCurrNum += num;
    if (maxOnCurrNum > maxThusFound) maxThusFound = maxOnCurrNum;
    if (maxOnCurrNum < 0) maxOnCurrNum = 0;
  }
  return maxThusFound;
}

export {};
