/**
 * Problem 2723: Add Two Promises
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. promise1 and promise2 are promises that resolve with a number
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: addTwoPromises
 * Algorithmic Paradigm: ???
 * Programming Paradigm: ???
 * Complexity:
 *   - Time: O(1).
 *   - Space: O(1).
 */
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
function addTwoPromises(promise1, promise2) {
  return Promise.all([promise1, promise2]).then((values) =>
    values.reduce((sum, value) => sum + value)
  );
}
