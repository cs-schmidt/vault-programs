/**
 * Problem 11: Container With Most Water
 *
 * Version: Original
 *
 * Constraints:
 *   1. 2 <= height.length <= 10^5
 *   2. 0 <= height[i] <= 10^4
 */

/**
 * Function: maxFillArea
 * Algorithmic Paradigm: Greedy w/ Two Pointer Technique
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time (Mean): O(n).
 *   - Space (Mean): O(1) auxiliary space.
 */
function maxArea(height: number[]): number {
  let lower = height.findIndex((num) => num != 0);
  let upper = height.length - 1;
  while (height[upper] == 0) upper -= 1;
  let result = areaInside(lower, upper);
  while (lower < upper) {
    if (height[lower] > height[upper]) {
      const upperHeight = height[upper];
      while (upper != lower && height[upper] <= upperHeight) upper -= 1;
    } else if (height[lower] < height[upper]) {
      const lowerHeight = height[lower];
      while (lower != upper && height[lower] <= lowerHeight) lower += 1;
    } else {
      const lowerHeight = height[lower];
      const upperHeight = height[upper];
      while (lower != upper && height[lower] <= lowerHeight) lower += 1;
      while (upper != lower && height[upper] <= upperHeight) upper -= 1;
    }
    result = Math.max(areaInside(lower, upper), result);
  }
  return result;

  // Internal Helpers
  // ========================================================================
  function areaInside(edgeA: number, edgeB: number): number {
    return Math.abs(edgeA - edgeB) * Math.min(height[edgeA], height[edgeB]);
  }
}

export {};
