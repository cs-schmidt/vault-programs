/**
 * Problem 2665: Counter II
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. -1000 <= init <= 1000
 *   2. 0 <= calls.length <= 1000
 *   3. calls[i] is one of "increment", "decrement" and "reset"
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: makeCounter
 * Algorithmic Paradigm: ???
 * Programming Paradigm: ???
 * Complexity:
 *   - Time: O(1).
 *   - Space: O(1).
 */
/**
 * @param {number} init
 * @return {{increment: Function, decrement: Function, reset: Function}}
 */
function createCounter(init) {
  let count = init;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
}
