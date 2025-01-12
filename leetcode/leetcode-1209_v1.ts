/**
 * Problem 1209: Remove All Adjacent Duplicates in String II
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= s.length <= 10^5
 *   2. 2 <= k <= 10^4
 *   3. s only contains lowercase English letters.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: removeDuplicates
 * Algorithmic Paradigm: Recursion
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
function removeDuplicates(s: string, k: number): string {
  let result: string = s;
  let i = 0;
  let j: number;
  while (i <= result.length - k) {
    j = i;
    while (result[j] === result[j + 1] && j + 1 < result.length) {
      j += 1;
      if (j - i + 1 === k) result = result.substring(0, i) + result.substring(j + 1);
    }
    if (i === j) i += 1;
    else if (j - i + 1 === k && i > 0) i -= 1;
    else i = j + 1;
  }
  return result === s ? result : removeDuplicates(result, k);
}
