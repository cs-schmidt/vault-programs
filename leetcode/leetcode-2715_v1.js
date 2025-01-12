/**
 * Problem 2715: Timeout Cancellation
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. fn is a function
 *   2. args is a valid JSON array
 *   3. 1 <= args.length <= 10
 *   4. 20 <= limit <= 1000
 *   5. 10 <= cancelTimeMs <= 1000
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: cancellable
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(1).
 *   - Space: O(1).
 */
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} limit
 * @return {Function}
 */
function cancellable(fn, args, limit) {
  const callTime = Date.now();
  const timerId = setTimeout(fn, limit, ...args);
  return function tryCancel() {
    if (Date.now() - callTime < limit) clearTimeout(timerId);
  };
}
