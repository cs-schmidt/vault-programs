/**
 * Problem 3: Longest Substring Without Repeating Characters
 * 
 * Version: Optimized
 *
 * Constraints:
 *   1. 0 <= s.length <= 5 * 10^4
 *   2. s consists of English letters, digits, symbols and spaces.
 */

/**
 * Function: maxDiverseSubstrLength
 * Algorithmic Paradigm: Greedy w/ Sliding Window Technique
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time (Worst): O(n).
 *   - Time (Best): O(1).
 *   - Space (Worst): O(n) auxiliary space.
 *   - Space (Best): O(1) auxiliary space.
 */
/**
 * @param {string} s
 * @returns {number}
 */
function lengthOfLongestSubstring(s) {
  let lengthSoFar = 0;
  let windowLower = 0;
  const lastIndex = new Map();
  for (let windowUpper = 0; windowUpper < s.length; windowUpper++) {
    const char = s[windowUpper];
    if (lastIndex.has(char) && lastIndex.get(char) >= windowLower) {
      lengthSoFar = Math.max(lengthSoFar, windowUpper - windowLower);
      windowLower = lastIndex.get(char) + 1;
    }
    lastIndex.set(char, windowUpper);
    if (s.length - windowLower <= lengthSoFar) return lengthSoFar;
  }
  return s.length - windowLower;
}
