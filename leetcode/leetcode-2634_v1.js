/**
 * Problem 2634: Filter Elements From Array
 *
 * Version: Original/Optimized
 *
 * Constriants:
 *   1. 0 <= arr.length <= 1000
 *   2. -10^9 <= arr[i] <= 10^9
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: filter
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
function filter(arr, fn) {
  return arr.reduce((result, value, index) => {
    if (fn(value, index)) result.push(value);
    return result;
  }, []);
}
