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
 * Algorithmic Paradigm: Brute Force
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n^2) and Ω(1).
 *   - Space: Θ(1).
 */
function maxArea(heights: number[]): number {
  let result = 0;
  for (let edge1 = 0; edge1 < heights.length - 1; edge1++) {
    for (let edge2 = edge1; edge2 < heights.length; edge2++)
      result = Math.max(areaInside(edge1, edge2), result);
  }
  return result;

  // ===========================================================================
  function areaInside(edgeA: number, edgeB: number): number {
    return Math.abs(edgeA - edgeB) * Math.min(heights[edgeA], heights[edgeB]);
  }
}

export {};
