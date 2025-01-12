/**
 * Problem 392: Is Subsequence
 *
 * Version: Original
 *
 * Constraints:
 *   1. 0 <= s.length <= 100
 *   2. 0 <= t.length <= 10^4
 *   3. s and t consist only of lowercase English letters.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: isSubsequence
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(|s| + |t|).
 *   - Space: O(1).
 */
function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) return true;
  let sIndex = 0;
  let tIndex = 0;
  while (!(tIndex === t.length || t.length - tIndex < s.length - sIndex)) {
    if (s[sIndex] === t[tIndex]) sIndex += 1;
    tIndex += 1;
  }
  if (sIndex === s.length) return true;
  return false;
}

export {};
