/**
 * Problem 278: First Bad Version
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= bad <= n <= 2^(31) - 1
 */

// TODO: Add comments to explain phantom variables.
// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

function solution(isBadVersion: (v: number) => boolean) {
  /**
   * Function: findBadVersion
   * Algorithmic Paradigm: Recursion
   * Programming Paradigm: Imperative
   * Complexity:
   *   - Time: O(log(n)).
   *   - Space: O(1).
   */
  return function findBadVersion(n: number): number {
    let lowerVersion = 1;
    while (lowerVersion < n) {
      if (isBadVersion(Math.floor((lowerVersion + n) / 2)))
        n = Math.floor((lowerVersion + n) / 2);
      else lowerVersion = Math.ceil((lowerVersion + n) / 2);
    }
    return n;
  };
}

export {};
