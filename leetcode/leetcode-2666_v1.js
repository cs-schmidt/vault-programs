/**
 * Problem 2666: Allow One Function Call
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. calls is a valid JSON array
 *   2. 1 <= calls.length <= 10
 *   3. 1 <= calls[i].length <= 100
 *   4. 2 <= JSON.stringify(calls).length <= 1000
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: once
 * Algorithmic Paradigm: ???
 * Programming Paradigm: ???
 * Complexity:
 *   - Time: O(1).
 *   - Space: O(1).
 */
/**
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
  let called = false;
  return function (...args) {
    if (called) return;
    called = true;
    return fn(...args);
  };
}
