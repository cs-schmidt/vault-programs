/**
 * Problem 162: Find Peak Element
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= nums.length <= 1000
 *   2. -2^31 <= nums[i] <= 2^31 - 1
 *   3. nums[i] != nums[i + 1] for all valid i.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * The algorithms works by recursively checking partitions of the input array, dividing
 * those partitions in half until one of the base cases is reached. We check each
 * partition for its peak value's index, then we compare the values across these indexes
 * and return the index with the largest peak value.
 */

/**
 * Function: findPeakElement
 * Algorithmic Paradigm: Divide-and-Conquer
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time: O(log(n)).
 *   - Space: ???.
 */
function findPeakElement(nums: number[]): number {
  return getPeakIndex(0, nums.length - 1);

  // ===========================================================================`
  function getPeakIndex(lower: number, upper: number): number {
    // Base Case 1: The partition of `nums` has 3 elements.
    if (upper - lower === 2) {
      if (nums[lower + 1] > Math.max(nums[lower], nums[upper])) return lower + 1;
      if (nums[lower] >= Math.max(nums[lower + 1], nums[upper])) return lower;
      return upper;
    }
    // Base Case 2: The partition of `nums` has 2 elements.
    if (upper - lower < 2) return nums[lower] > nums[upper] ? lower : upper;
    // Recursive Case:
    // --------------------------------------------------
    // Finds the peak indexes in the lower and upper partitions, then we compare their
    // associated values in `nums` to return one of the two indexes.
    const mid = lower + Math.floor((upper - lower) / 2);
    const lowerPeakIndex = getPeakIndex(lower, mid);
    const upperPeakIndex = getPeakIndex(mid + 1, upper);
    return nums[upperPeakIndex] >= nums[lowerPeakIndex] ? upperPeakIndex : lowerPeakIndex;
  }
}

export {};
