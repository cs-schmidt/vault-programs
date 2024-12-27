/**
 * Problem 11: Container With Most Water
 *
 * Version: Brute-Force/Naive
 *
 * Constraints:
 *   1. 2 <= heights.length <= 10^5
 *   2. 0 <= heights[i] <= 10^4
 */

/**
 * Function: maxFillArea
 * Algorithmic Paradigm: Brute-Force w/ Two Pointer Technique
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time (Mean): O(n^2).
 *   - Space (Mean): O(1) auxiliary space.
 */
function maxArea(heights: number[]): number {
  let result = 0;
  for (let edge1 = 0; edge1 < heights.length - 1; edge1++) {
    for (let edge2 = edge1; edge2 < heights.length; edge2++) {
      result = Math.max(
        Math.abs(edge1 - edge2) * Math.min(heights[edge1], heights[edge2]),
        result
      );
    }
  }
  return result;
}

export {};
