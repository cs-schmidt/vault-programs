/**
 * Problem 2621: Sleep
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= delay <= 1000
 *   2. sleep can resolve to any value.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: sleep
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(1).
 *   - Space: O(1).
 */
/**
 * @param {number} delay
 * @return {Promise}
 */
async function sleep(delay) {
  await new Promise((resolve) => setTimeout(resolve, delay));
}
