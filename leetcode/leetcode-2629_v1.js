/**
 * Problem 2629: Function Composition
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. -1000 <= x <= 1000
 *   2. 0 <= functions.length <= 1000
 *   3. all functions accept and return a single integer
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: compose
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time: O(1).
 *   - Space: O(1).
 */
/**
 * @param {Function[]} functions
 * @return {Function}
 */
function compose(functions) {
  return (input) => functions.reduceRight((output, fn) => fn(output), input);
}
