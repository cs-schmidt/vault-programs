/**
 * Problem 643: Maximum Average Subarray I
 *
 * Version: Original
 *
 * Constraints:
 *   1. n == nums.length
 *   2. 1 <= k <= n <= 10^5
 *   3. -10^4 <= nums[i] <= 10^4
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: findMaxAverage
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(max{|nums| - k, k}).
 *   - Space: O(1).
 */
function findMaxAverage(nums: number[], k: number): number {
  let maxSum = 0;
  let stepSum = 0;
  let stepEnd = k - 1;
  for (let i = 0; i <= stepEnd; i++) stepSum += nums[i];
  maxSum = stepSum;
  while (stepEnd < nums.length - 1) {
    stepEnd += 1;
    stepSum += nums[stepEnd] - nums[stepEnd - k];
    if (stepSum > maxSum) maxSum = stepSum;
  }
  return maxSum / k;
}

export {};
