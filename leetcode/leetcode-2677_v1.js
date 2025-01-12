/**
 * Problem 2677: Chunk Array
 *
 * Verison: Original/Optimized
 *
 * Constraints:
 *   1. arr is a valid JSON array
 *   2. 2 <= JSON.stringify(arr).length <= 10^5
 *   3. 1 <= size <= arr.length + 1
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: chunk
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time : O(n).
 *   - Space: O(n).
 */
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
function chunk(arr, size) {
  const result = [];
  let sliceHead = 0;
  let sliceTail = size;
  while (sliceHead < arr.length) {
    result.push(arr.slice(sliceHead, sliceTail));
    sliceHead = sliceTail;
    sliceTail += size;
  }
  return result;
}
