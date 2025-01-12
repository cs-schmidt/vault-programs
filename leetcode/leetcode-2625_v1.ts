/**
 * Problem 2625: Flatten Deeply Nested Array
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. 0 <= count of numbers in arr <= 10^5
 *   2. 0 <= count of subarrays in arr <= 10^5
 *   3. maxDepth <= 1000
 *   4. -1000 <= each number <= 1000
 *   5. 0 <= n <= 1000
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

/**
 * Function: flatten
 * Algorithmic Paradigm: Recursion
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
function flat(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  const result: MultiDimensionalArray = [];
  let depth = n;
  extractResult(arr);
  return result;

  // ===========================================================================
  function extractResult(arr: MultiDimensionalArray) {
    arr.forEach((value) => {
      if (value instanceof Array && depth > 0) {
        depth -= 1;
        extractResult(value);
      } else result.push(value);
    });
    depth += 1;
  }
}

export {};
