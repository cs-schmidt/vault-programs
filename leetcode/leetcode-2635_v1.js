/**
 * Problem 2635: Apply Transform Over Each Element in Array
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. 0 <= arr.length <= 1000
 *   2. -10^9 <= arr[i] <= 10^9
 *   3. fn returns a number
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: map
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(n).
 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function map(arr, fn) {
  const result = [];
  arr.forEach((value, index) => result.push(fn(value, index)));
  return result;
}
