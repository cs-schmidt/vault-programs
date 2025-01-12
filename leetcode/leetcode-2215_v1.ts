/**
 * Problem 2215: Find the Difference of Two Arrays
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= nums1.length, nums2.length <= 1000
 *   2. -1000 <= nums1[i], nums2[i] <= 1000
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: findDifference
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
function findDifference(nums1: number[], nums2: number[]): number[][] {
  const distinctNums1 = new Set(nums1);
  const distinctNums2 = new Set(nums2);
  const result: number[][] = [[], []];
  for (const num of distinctNums1) {
    if (!distinctNums2.has(num)) result[0].push(num);
    else distinctNums2.delete(num);
  }
  result[1] = Array.from(distinctNums2);
  return result;
}

export {};
