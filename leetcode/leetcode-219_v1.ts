/**
 * Problem 219: Contains Duplicate II
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= nums.length <= 10^5
 *   2. -10^9 <= nums[i] <= 10^9
 *   3. 0 <= k <= 10^5
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: containsNearbyDuplicate
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(n).
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (k === 0) return false;
  const prevIndexOf: Record<string, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const int = nums[i];
    if (prevIndexOf[int] == null || Math.abs(prevIndexOf[int] - i) > k)
      prevIndexOf[int] = i;
    else return true;
  }
  return false;
}

export {};
