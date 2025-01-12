/**
 * Problem 2626: Array Reduce Transformation
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. 0 <= nums.length <= 1000
 *   2. 0 <= nums[i] <= 1000
 *   3. 0 <= init <= 1000
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: reduce
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(1).
 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @param {number} init
 * @return {number[]}
 */
function reduce(arr, fn, init) {
  arr.forEach((value) => (init = fn(init, value)));
  return init;
}
