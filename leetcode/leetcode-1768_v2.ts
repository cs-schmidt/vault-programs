/**
 * Problem 1768: Merge Strings Alternately
 *
 * Version: Optimized
 *
 * Constraints:
 *   1. 1 <= str1.length, str2.length <= 100
 *   2. str1 and str2 consist of lowercase English letters.
 */

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
  const charWeave: string[] = [];
  const weaveSize = Math.min(str1.length, str2.length);
  for (let i = 0; i < weaveSize; i++) charWeave.push(str1[i], str2[i]);
  if (str1.length > weaveSize) charWeave.push(str1.substring(weaveSize));
  else charWeave.push(str2.substring(weaveSize));
  return charWeave.join('');
}

export {};
