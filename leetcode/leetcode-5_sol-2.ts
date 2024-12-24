/**
 * Problem 5: Longest Palindromic Substring
 *
 * Constraints:
 *  1. 1 <= s.length <= 1000
 *  2. s consist of only digits and English letters.
 */

// TODO: Finish solution (DP version).

/**
 * Name: longestPalindromicSubstr
 * Algorithmic Paradigm: Bottom-Up 2D Dynamic Programming
 * Programming Paradigm: Imperative
 * Complexity:
 *  - Time (Worst): O(n^2).
 *  - Time (Best): O(n).
 *  - Space (Mean): O(n) auxilary space.
 */
function longestPalindrome(str: string): string {
  // Handle edge cases.
  if (str.length <= 1) return str;
  if (str.length == 2) return str[0] == str[1] ? str : str[0];

  // Traverse through the 2D state space.
  let result = '';
  let column = 0;
  let length = str.length - column;
  let lower = 0;
  let upper = 0;
  const memo: number[][] = [Array(str.length).fill(1), Array(str.length - 1).fill(1)];
  while (column < str.length) {
    const states: number[] = [];
    const subStates: number[] = memo.shift() as number[];
    for (let i = 0; i < length; i++) {
      if (str[lower] == str[upper] && subStates[i]) {
        if (result.length < 1 + column) result = str.substring(lower, upper + 1);
        if (inMemoRange(lower, upper, column, length, str.length)) states.push(1);
      } else if (inMemoRange(lower, upper, column, length, str.length)) states.push(0);
      lower += 1;
      upper += 1;
    }
    column += 1;
    length += str.length - column;
    lower = 0;
    upper = column;
    memo.push(states);
  }

  return result;

  // Internal Helpers
  // ======================================================================
  function inMemoRange(
    lower: number,
    upper: number,
    column: number,
    length: number,
    size: number
  ): boolean {
    return column < lower + upper && lower + upper < length + size - 2;
  }
}

export {};
