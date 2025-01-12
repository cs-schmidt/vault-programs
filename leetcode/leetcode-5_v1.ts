/**
 * Problem 5: Longest Palindromic Substring
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= str.length <= 1000
 *   2. str consist of only digits and English letters.
 */

// TODO: Determine algorithmic paradigm and techniques.

/**
 * Function: longestPalindromicSubstr
 * Algorithmic Paradigm: Greedy (Center Expansion)
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n^2) and Ω(1).
 *   - Space: Θ(1).
 */
function longestPalindrome(str: string): string {
  if (str.length <= 1) return str;
  let longestFoundWidth: number = 0;
  let longestFoundRange: number[] = [];
  for (let midPoint = 0; midPoint < str.length - 1; midPoint++) {
    let oddRange = maxPalindromeAtMid(str, midPoint);
    let evenRange = maxPalindromeAtMid(str, midPoint, true);
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

  // ===========================================================================
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
