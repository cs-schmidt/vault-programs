/**
 * Problem 5: Longest Palindromic Substring
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= s.length <= 1000
 *   2. s consist of only digits and English letters.
 */

/**
 * Function: longestPalindromicSubstr
 * Algorithmic Paradigm: Optimized Brute-Force
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time (Worst): O(n^2).
 *   - Time (Best): O(n).
 *   - Space (Mean): O(1) auxiliary space.
 */
function longestPalindrome(str: string): string {
  if (str.length <= 1) return str;
  let longestFoundWidth: number = 0;
  let longestFoundRange: number[] = [];
  for (let mid = 0; mid < str.length - 1; mid++) {
    let oddRange = maxPalindromeAtMid(str, mid);
    let evenRange = maxPalindromeAtMid(str, mid, true);
    if (breadth(...oddRange) > longestFoundWidth) {
      longestFoundWidth = breadth(...oddRange);
      longestFoundRange = oddRange;
    }
    if (breadth(...evenRange) > longestFoundWidth) {
      longestFoundWidth = breadth(...evenRange);
      longestFoundRange = evenRange;
    }
  }
  return str.slice(longestFoundRange[0], longestFoundRange[1] + 1);

  // Internal Helpers
  // ======================================================================
  function maxPalindromeAtMid(str: string, mid: number, even: boolean = false): number[] {
    if (even && str[mid] != str[mid + 1]) return [NaN, NaN];
    let lower = mid;
    let upper = even ? mid + 1 : mid;
    while (lower > 0 && upper < str.length - 1 && str[lower - 1] == str[upper + 1]) {
      lower -= 1;
      upper += 1;
    }
    return [lower, upper];
  }

  function breadth(...pair: number[]): number {
    return pair[1] - pair[0] + 1;
  }
}

export {};
