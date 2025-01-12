/**
 * Problem 2704: To Be Or Not To Be
 *
 * Version: Original/Optimized
 *
 * Constraints: None
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: expect
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(1).
 *   - Space: O(1).
 */
/**
 * @param {any} value
 * @return {Object}
 */
function expect(value) {
  return {
    toBe(input) {
      if (input === value) return true;
      throw Error('Not Equal');
    },
    notToBe(input) {
      if (input !== value) return true;
      return Error('Equal');
    },
  };
}
