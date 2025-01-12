/**
 * Problem 2721: Execute Asynchronous Functions in Parallel
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. functions is an array of functions that returns promises
 *   2. 1 <= functions.length <= 10
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: promiseAll
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(1).
 *   - Space: O(1).
 */
/**
 * @param {Function[]} functions
 * @return {Promise}
 */
function promiseAll(functions) {
  const result = new Array(functions.length);
  let resolved = 0;
  return new Promise((resolve, reject) => {
    functions.forEach((fn, i) => {
      fn()
        .then((value) => {
          result[i] = value;
          resolved += 1;
          if (resolved === functions.length) resolve(result);
        })
        .catch((value) => reject(value));
    });
  });
}
