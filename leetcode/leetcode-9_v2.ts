/**
 * Problem 9: Palindrome Number
 *
 * Version: Optimized/Follow-Up
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
 *   - Space: Θ(1).
 */
function isPalindrome(int: number): boolean {
  if (int < 0) return false;
  for (let i = orderOfMagnitude(int); i > 0; i -= 2) {
    if (digitInPlace(int, i) != finalDigitOf(int)) return false;
    int = dropEndDigit(int);
  }
  return true;

  // ===========================================================================
  function orderOfMagnitude(natNum: number): number {
    return Math.trunc(Math.log10(natNum || 1));
  }

  function digitInPlace(natNum: number, index: number): number {
    return Math.trunc(natNum / 10 ** index) % 10;
  }

  function finalDigitOf(natNum: number): number {
    return natNum % 10;
  }

  function dropEndDigit(natNum: number): number {
    return Math.trunc(natNum / 10);
  }
}

export {};
