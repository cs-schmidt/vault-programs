/**
 * Problem 945: Minimum Increment to Make Array Unique
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= nums.length <= 10^5
 *   2. 0 <= nums[i] <= 10^5
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: minIncrementForUnique
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n*log(n)).
 *   - Space: O(1).
 */
/**
 * @param {number[]} nums
 * @returns {number}
 */
function minIncrementForUnique(nums) {
  if (nums.length <= 1) return 0;
  let result = 0;
  nums.sort((num1, num2) => {
    if (num1 < num2) return -1;
    if (num2 > num1) return 1;
    return 0;
  });
  let maxNumSoFar = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= maxNumSoFar) {
      result += maxNumSoFar - nums[i] + 1;
      maxNumSoFar += 1;
    } else maxNumSoFar = nums[i];
  }
  return result;
}
