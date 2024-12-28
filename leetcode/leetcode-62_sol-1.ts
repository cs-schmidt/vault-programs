/**
 * Problem 62: Unique Paths
 *
 * Version: Original Solution
 *
 * Constraints:
 *   1. 1 <= m, n <= 100
 */

/**
 * Given any m by n grid where m,n > 0, starting at the first tile (<0,0>) any path to the
 * end tile (the bottom-right corner) will involve m - 1 moves down and n - 1 moves right.
 * Thus, the number of unique paths to the end tile will be equal to all the quantity of
 * move combinations. This can be calculated with the Multiset Permutations formula.
 *
 * In some sense, this LeetCode problem is already flawed because with m and n sufficently
 * large, the result will be a number above Number.MAX_SAFE_INTEGER and therefore JS can't
 * guarantee its accurate representation.
 */

/**
 * Function: uniquePathsToGridEnd
 * Algorithmic Paradigm: Direct Computation w/ Linear Iteration Technique
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time (Mean): O(max{|rows|, |cols|}).
 *   - Space (Mean): O(1) auxiliary space.
 */
function uniquePaths(rows: number, cols: number): number {
  const size = rows + cols - 2;
  if (size < 19) return factorialN(size) / (factorialN(rows - 1) * factorialN(cols - 1));
  return Number(
    factorialB(BigInt(size)) /
      (factorialB(BigInt(rows - 1)) * factorialB(BigInt(cols - 1)))
  );

  // Internal Helpers
  // ========================================================================
  function factorialN(natNum: number): number {
    for (let int = natNum - 1; int > 0; int--) natNum *= int;
    return natNum || 1;
  }

  function factorialB(natNum: bigint): bigint {
    for (let int = natNum - 1n; int > 0n; int--) natNum *= int;
    return natNum || 1n;
  }
}

export {};
