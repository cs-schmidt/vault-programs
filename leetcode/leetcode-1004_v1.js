/**
 * Problem 1004: Max Consecutive Ones III
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= nums.length <= 10^5
 *   2. nums[i] is either 0 or 1.
 *   3. 0 <= k <= nums.length
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: longestOnes
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(1).
 */
/**
 * @param {number[]} bits
 * @param {number} k
 * @return {number}
 */
function longestOnes(bits, k) {
  let result = 0;
  let chainStart = 0;
  let chainEnd = 0;
  const bitsEnd = bits.length - 1;
  if (k === 0) {
    while (chainStart < bitsEnd && bits.at(chainStart) !== 1) chainStart += 1;
    chainEnd = chainStart;
    while (chainEnd < bitsEnd && bits.at(chainEnd + 1) !== 0) chainEnd += 1;
    if (chainStart === chainEnd && bits.at(chainEnd) === 0) return result;
    result = Math.max(chainEnd - chainStart + 1, result);
    while (chainEnd < bitsEnd) {
      while (chainEnd < bitsEnd && bits.at(chainEnd + 1) === 0) chainEnd += 1;
      if (chainEnd < bitsEnd) {
        chainEnd += 1;
        chainStart = chainEnd;
        while (chainEnd < bitsEnd && bits.at(chainEnd + 1) === 1) chainEnd += 1;
        result = Math.max(chainEnd - chainStart + 1, result);
      } else return result;
    }
  } else {
    let zerosInChain = bits.at(0) === 0 ? 1 : 0;
    while (chainEnd < bitsEnd && zerosInChain < k) {
      if (bits.at(chainEnd + 1) === 0) zerosInChain += 1;
      chainEnd += 1;
    }
    while (chainEnd < bitsEnd && bits.at(chainEnd + 1) === 1) chainEnd += 1;
    result = Math.max(chainEnd - chainStart + 1, result);
    while (chainEnd < bitsEnd) {
      while (bits.at(chainStart) === 1) chainStart += 1;
      if (bits.at(chainStart + 1) === 0) chainStart += 1;
      else {
        while (bits.at(chainStart) === 0) chainStart += 1;
      }
      chainEnd += 1;
      while (chainEnd < bitsEnd && bits.at(chainEnd + 1) === 1) chainEnd += 1;
      result = Math.max(chainEnd - chainStart + 1, result);
    }
  }
  return result;
}
