/**
 * Problem 2620: Counter
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. -1000 <= num <= 1000
 *   2. 0 <= calls.length <= 1000
 *   3. calls[i] === "call"
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: makeCounter
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(1).
 *   - Space: O(1).
 */
/**
 * @param {number} num
 * @return {Function}
 */
function createCounter(num) {
  return () => num++;
}
