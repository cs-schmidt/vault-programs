/**
 * Problem 704: Binary Search
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= nums.length <= 10^4.
 *   2. -10^4 < nums[i], target < 10^4
 *   3. All the integers in nums are unique.
 *   4. nums is sorted in ascending order.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.
// FIXME: Eliminate errors reported by TS compiler.

/**
 * Function: searchSortedList
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(log(n)).
 *   - Space: O(1).
 */
function search(sortedNums: number[], target: number): number {
  let start = 0;
  let end: number = sortedNums.length - 1;
  while (start <= end) {
    if (start === end && sortedNums[start] !== target) return -1;
    if (sortedNums[Math.floor((start + end) / 2)] < target)
      start = Math.ceil((start + end) / 2);
    else if (sortedNums[Math.floor((start + end) / 2)] > target)
      end = Math.floor((start + end) / 2);
    else if (sortedNums[Math.floor((start + end) / 2)] === target)
      return Math.floor((start + end) / 2);
  }
}

export {};
