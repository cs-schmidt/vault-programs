/**
 * Problem 5: Longest Palindromic Substring
 *
 * Constraints:
 *  1. 1 <= s.length <= 1000
 *  2. s consist of only digits and English letters.
 */

// TODO: Complete solution.

/**
 * Name: `longestPalindromicSubstr`
 * Algorithmic Paradigm: Bottom-Up 2D Dynamic Programming
 * Programming Paradigm: Declarative
 * Complexity:
 *  - Time Complexity: O(n^2)
 *  - Space Complexity: O(n) auxilary space
 */
function longestPalindrome(str: string): string {
  // Handle edge cases.
  if (str.length <= 1) return str;
  if (str.length == 2) return str[0] == str[1] ? str : str[0];

  // Initialize memo by traversing through the state space.
  let result = '';
  let column = 0;
  let length = str.length - column;
  let lower = 0;
  let upper = 0;
  const memos: number[][] = [];
  while (column < 2) {
    const memo: number[] = [];
    for (let i = 0; i < length; i++) {
      if (str[lower] == str[upper]) {
        if (result.length < 1 + column) result = str.slice(lower, upper + 1);
        if (inMemoRange(lower, upper, column, length, str.length)) memo.push(1);
      } else if (inMemoRange(lower, upper, column, length, str.length)) memo.push(0);
      lower += 1;
      upper += 1;
    }
    column += 1;
    length = str.length - column;
    lower = 0;
    upper = column;
    memos.unshift(memo);
  }

  // Iterate through more solutions.
  // while (column < str.length) {
  //   const subproblems = memos.pop();
  //   const memo: number[] = [];
  //   for (let i = 0; i < length; i++) {
  //     if (str[lower] == str[upper]) {
  //     }
  //   }
  // }

  return result;

  // - Subproblem: dp[i][j] == 1 if and only if dp[i+1][j-1] == 1 and s[i] == s[j].

  // Internal Helpers
  // ======================================================================
  function inMemoRange(
    lower: number,
    upper: number,
    column: number,
    length: number,
    size: number
  ) {
    return column < lower + upper && lower + upper < length + size - 2;
  }
}
