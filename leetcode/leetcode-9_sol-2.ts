/**
 * Problem 9: Palindrome Number
 *
 * Constraints:
 *   1. -2^31 <= int <= 2^31 - 1.
 */

// NOTE: This is the "follow-up" solution.

/**
 * Function: isPalindromic
 * Algorithmic Paradigm: Brute-Force w/ Linear Iteration
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time (Mean): O(log_10(x)) (i.e., the amount of digits inside `int`).
 *   - Space (Mean): O(1) auxiliary space.
 */
function isPalindrome(int: number): boolean {
  if (int < 0) return false;
  for (let i = orderOfMagnitude(int); i > 0; i -= 2) {
    if (digitInPlace(int, i) != finalDigitOf(int)) return false;
    int = Math.trunc(int / 10);
  }
  return true;

  // Internal Helpers
  // ========================================================================
  function orderOfMagnitude(natNum: number): number {
    return Math.trunc(Math.log10(natNum || 1));
  }

  function digitInPlace(natNum: number, index: number): number {
    return Math.trunc(natNum / 10 ** index) % 10;
  }

  function finalDigitOf(natNum: number): number {
    return natNum % 10;
  }
}

export {};
