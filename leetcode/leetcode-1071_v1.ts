/**
 * Problem 1071: Greatest Common Divisor of Strings
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= `str1.length`, `str2.length` <= 1000
 *   2. `str1` and `str2` consist of English uppercase letters.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: gcdOfStrings
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 === str2 + str1) {
    while (str1 !== str2) {
      if (str1.length > str2.length) str1 = str1.slice(str2.length, str1.length);
      else str2 = str2.slice(str1.length, str2.length);
    }
    return str1;
  }
  return '';
}

export {};
