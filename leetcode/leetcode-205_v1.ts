/**
 * Problem 205: Isomorphic Strings
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= s.length <= 5 * 10^4
 *   2. t.length == s.length
 *   3. s and t consist of any valid ascii character.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: isIsomorphic
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(|s|).
 *   - Space: O(|s|).
 *
 */
function isIsomorphic(s: string, t: string): boolean {
  const mappings: { [key: string]: string } = {};
  const mappedTo: Set<string> = new Set();
  for (let i = 0; i < s.length; i++) {
    if (
      (mappings[s[i]] && mappings[s[i]] !== t[i]) ||
      (mappedTo.has(t[i]) && mappings[s[i]] !== t[i])
    )
      return false;
    mappings[s[i]] = t[i];
    mappedTo.add(t[i]);
  }
  return true;
}
