/**
 * Problem 2724: Sort By
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. arr is a valid JSON array
 *   2. fn is a function that returns a number
 *   3. 1 <= arr.length <= 5 * 10^5
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: sortBy
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time: O(n*log(n)).
 *   - Space: O(1).
 */
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
function sortBy(arr, fn) {
  return arr.sort((value1, value2) => fn(value1) - fn(value2));
}
