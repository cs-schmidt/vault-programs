/**
 * Problem 5: Longest Palindromic Substring
 *
 * Version: Dynamic Programming
 *
 * Constraints:
 *   1. 1 <= str.length <= 1000
 *   2. str consist of only digits and English letters.
 */

// TODO: Finish solution.

/**
 * Function: longestPalindromicSubstr
 * Algorithmic Paradigm: Bottom-Up 2D Dynamic Programming
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n^2) and ???.
 *   - Space: O(n) and ???.
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

  // ===========================================================================
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
