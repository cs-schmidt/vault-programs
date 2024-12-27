/**
 * Problem 9: Palindrome Number
 *
 * Constraints:
 *   1. -2^31 <= int <= 2^31 - 1.
 */

/**
 * Function: isPalindromic
 * Algorithmic Paradigm: Brute-Force
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time (Mean): O(log_10(x)).
 *   - Space (Mean): O(log_10(x)) auxiliary space.
 */
function isPalindrome(int: number): boolean {
  const digits = int.toString();
  for (let i = 0; i <= Math.floor((digits.length - 1) / 2); i++) {
    if (digits.at(i) != digits.at(-(i + 1))) return false;
  }
  return true;
}

export {};
