/**
 * Problem 2637: Promise Time Limit
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *  1. 0 <= inputs.length <= 10
 *  2. 0 <= limit <= 1000
 *  3. fn returns a promise
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: timeLimit
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time; O(1).
 *   - Space: O(1).
 */
/**
 * @param {Function} fn
 * @param {number} limit
 * @return {Function}
 */
function timeLimit(fn, limit) {
  return async function (...args) {
    const start = Date.now();
    return Promise.race([
      (async function () {
        const result = await fn(...args);
        if (Date.now() - start >= limit) throw 'Time Limit Exceeded';
        return result;
      })(),
      new Promise((_, reject) => {
        setTimeout(reject, limit, 'Time Limit Exceeded');
      }),
    ]);
  };
}
