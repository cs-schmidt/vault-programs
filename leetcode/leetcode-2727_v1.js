/**
 * Problem 2727: Is Object Empty
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. obj is a valid JSON object or array
 *   2. 2 <= JSON.stringify(obj).length <= 10^5
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: isEmpty
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(1).
 *   - Space: O(1).
 */
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
function isEmpty(obj) {
  return obj instanceof Array ? !obj.length : !Object.keys(obj).length;
}

export {};
