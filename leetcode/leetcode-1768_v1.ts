/**
 * Problem 1768: Merge Strings Alternately
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= str1.length, str2.length <= 100
 *   2. str1 and str2 consist of lowercase English letters.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: weaveStrings
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(n).
 */
function mergeAlternately(str1: string, str2: string): string {
  let wovenString = '';
  const minLength = Math.min(str1.length, str2.length);
  for (let i = 0; i < minLength; i++) wovenString += str1[i] + str2[i];
  return str1.length <= minLength
    ? wovenString + str2.slice(minLength)
    : wovenString + str1.slice(minLength);
}

export {};
