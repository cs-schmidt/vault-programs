/**
 * Problem 3: Longest Substring Without Repeating Characters
 *
 * Version: Optimized
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
  const lastIndex = Object.create(null);
  for (let windowHead = 0; windowHead < str.length; windowHead++) {
    const char = str[windowHead];
    if (char in lastIndex && lastIndex[char] >= windowTail) {
      lengthSoFar = Math.max(lengthSoFar, windowHead - windowTail);
      windowTail = lastIndex[char] + 1;
    }
    lastIndex[char] = windowHead;
  }
  return Math.max(lengthSoFar, str.length - windowTail);
}
