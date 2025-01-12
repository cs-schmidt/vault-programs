/**
 * Problem 2619: Array Prototype Last
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. arr is a valid JSON array
 *   2. 0 <= arr.length <= 1000
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: Array.prototype.tail
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(1).
 *   - Space: O(1).
 */
Array.prototype.last = function () {
  return this.length ? this.at(-1) : -1;
};
