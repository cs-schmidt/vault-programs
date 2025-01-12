/**
 * Problem 2725: Interval Cancellation
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. fn is a function
 *   2. args is a valid JSON array
 *   3. 1 <= args.length <= 10
 *   4. 30 <= t <= 100
 *   5. 10 <= cancelTimeMs <= 500
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
 *   - Space O(1).
 */
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t) {
  const timerId = setInterval(fn, t, ...args);
  fn(...args);
  return function cancelTrigger() {
    clearTimeout(timerId);
  };
}
