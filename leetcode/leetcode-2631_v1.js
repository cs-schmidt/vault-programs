/**
 * Problem 2631: Group By
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. 0 <= array.length <= 10^5
 *   2. fn returns a string
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: Array.prototype.groupBy
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(n).
 */
/**
 * @param {Function}
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((groups, value) => {
    const key = fn(value);
    if (Object.hasOwn(groups, key)) groups[key].push(value);
    else groups[key] = Array.of(value);
    return groups;
  }, {});
};
