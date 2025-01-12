/**
 * Problem 374: Guess Number Higher or Lower
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= n <= 2^31 - 1
 *   2. 1 <= pick <= n
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: guessNumber
 * Algorithmic Paradigm: Divide-and-Conquer
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(log(n)).
 *   - Space: O(log(n)).
 */
function guessNumber(n: number): number {
  let mid = 0; // save space by caching `mid` variable used by `findInRange()`.
  return (
    /** Attempts the find the guess number `k` between `low` and `high`. */
    (function findInRange(low: number, high: number): number {
      mid = Math.floor((high + low) / 2);
      // Base Case: The middle number in the range is the correct guess.
      if (guess(mid) === 0) return mid;
      // If `mid` is greater than the correct number.
      if (guess(mid) === -1) return findInRange(low, mid - 1);
      // Otherwise, `mid` is less than the correct number.
      return findInRange(mid + 1, high);
    })(1, n)
  );
}

// ========================================================================

/** Placeholder Functions */
/**
 * Forward declaration of guess API.
 * @param {number} num - Your guess.
 * @return -1 if num is above the target value, 1 if num is below the target value, and 0
 *         otherwise.
 */
function guess(num: number): number {
  return 0;
}

export {};
