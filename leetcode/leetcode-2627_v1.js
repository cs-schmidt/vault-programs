/**
 * Problem 2627: Debounce
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. 0 <= t <= 1000
 *   2. 1 <= calls.length <= 10
 *   3. 0 <= calls[i].delay <= 1000
 *   4. 0 <= calls[i].inputs.length <= 10
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: debounce
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(1).
 *   - Space O(1).
 */
/**
 * @param {Function} fn
 * @param {number} delay
 * @return {Function}
 */
function debounce(fn, delay) {
  let timerId;
  return function debouncedFn(...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(fn, delay, ...args);
  };
}
