/**
 * Problem 9: Palindrome Number
 *
 * Version: Original
 *
 * Constraints:
 *   1. -2^31 <= int <= 2^31 - 1.
 */

// TODO: Determine algorithmic paradigm and techniques.

/**
 * Function: isPalindromic
 * Algorithmic Paradigm: Ad Hoc (Two-Pointer)
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(log_10(n)) and Ω(1).
 *   - Space: O(log_10(n)) and Ω(1).
 */
function isPalindrome(int: number): boolean {
  const digits = int.toString();
  for (let i = 0; i <= Math.floor((digits.length - 1) / 2); i++) {
    if (digits.at(i) != digits.at(-(i + 1))) return false;
  }
  return true;
}

export {};
