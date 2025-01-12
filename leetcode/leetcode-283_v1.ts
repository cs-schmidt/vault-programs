/**
 * Problem 283: Move Zeros
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= nums.length <= 10^4
 *   2. -2^31 <= nums[i] <= 2^31 - 1
 *   3. Must modify `nums` in-place without making a copy of it.
 *   4. The sortition must be stable.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: moveZeros
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complxity:
 *   - Time: O(n).
 *   - Space: O(1).
 */
function moveZeroes(nums: number[]): void {
  let zeroIdx = nums.indexOf(0);
  let nonZeroIdx = zeroIdx;
  while (nums[nonZeroIdx] === 0 && nonZeroIdx < nums.length) nonZeroIdx += 1;
  if (zeroIdx === -1 || nonZeroIdx === nums.length) return;
  while (nonZeroIdx < nums.length) {
    nums[zeroIdx] = nums[nonZeroIdx];
    nums[nonZeroIdx] = 0;
    while (nums[zeroIdx] !== 0 && zeroIdx < nums.length) zeroIdx += 1;
    while (nums[nonZeroIdx] === 0 && nonZeroIdx < nums.length) nonZeroIdx += 1;
  }
}

export {};
