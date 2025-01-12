/**
 * Problem 3: Longest Substring Without Repeating Characters
 *
 * Version: Original
 *
 * Constraints:
 *   1. 0 <= str.length <= 5 * 10^4
 *   2. str consists of English letters, digits, symbols and spaces.
 */

/**
 * Function: maxDiverseSubstrLength
 * Algorithmic Paradigm: Greedy (Sliding Window)
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n) and Ω(1).
 *   - Space: O(n) and Ω(1).
 */
/**
 * @param {string} str
 * @returns {number}
 */
function lengthOfLongestSubstring(str) {
  let lengthSoFar = 0;
  let windowTail = 0;
  let windowHead = 0;
  const lastIndex = new Map();
  for (const char of str) {
    if (lastIndex.has(char) && lastIndex.get(char) >= windowTail) {
      lengthSoFar = Math.max(lengthSoFar, windowHead - windowTail);
      windowTail = lastIndex.get(char) + 1;
    }
    lastIndex.set(char, windowHead);
    windowHead += 1;
  }
  return Math.max(lengthSoFar, windowHead - windowTail);
}
