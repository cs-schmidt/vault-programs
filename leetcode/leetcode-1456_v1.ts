/**
 * Problem 1456: Maximum Number of Vowels in a Substring of Given Length
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= s.length <= 10^5
 *   2. s consists of lowercase English letters.
 *   3. 1 <= k <= s.length
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: maxVowels
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(1).
 */
function maxVowels(s: string, k: number): number {
  const vowelRegex = /^[aeiou]$/;
  let maxSubStrCount = 0;
  let currSubStrCount = 0;
  for (let i = 0; i <= k - 1; i++) {
    if (vowelRegex.test(s[i])) maxSubStrCount += 1;
  }
  currSubStrCount = maxSubStrCount;
  for (let step = k; step < s.length; step++) {
    if (maxSubStrCount === k) return maxSubStrCount;
    if (vowelRegex.test(s[step - k])) currSubStrCount -= 1;
    if (vowelRegex.test(s[step])) currSubStrCount += 1;
    if (currSubStrCount > maxSubStrCount) maxSubStrCount = currSubStrCount;
  }
  return maxSubStrCount;
}

export {};
