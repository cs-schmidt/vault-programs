/**
 * Problem 1328: Break a Palindrome
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= palindrome.length <= 1000
 *   2. palindrome consists of only lowercase English letters.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: breakPalindrome
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
function breakPalindrome(palindrome: string): string {
  if (palindrome.length % 2 === 0) {
    for (let i = 0; i <= Math.floor((palindrome.length - 1) / 2); i++) {
      if (palindrome[i] !== 'a')
        return `${palindrome.slice(0, i)}a${palindrome.slice(i + 1)}`;
    }
  } else {
    for (let i = 0; i < Math.floor((palindrome.length - 1) / 2); i++) {
      if (palindrome[i] !== 'a')
        return `${palindrome.slice(0, i)}a${palindrome.slice(i + 1)}`;
    }
  }
  if (palindrome.length > 1) {
    if (palindrome.at(-1) === 'a') return `${palindrome.slice(0, -1)}b`;
    return `${palindrome.slice(0, -1)}a`;
  }
  return '';
}

export {};
