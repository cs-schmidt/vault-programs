/**
 * Problem 11: Container With Most Water
 *
 * Version: Optimized
 *
 * Constraints:
 *   1. 2 <= heights.length <= 10^5
 *   2. 0 <= heights[i] <= 10^4
 *
 */

/**
 * Function: maxFillArea
 * Algorithmic Paradigm: Greedy w/ Two Pointer Technique
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time (Mean): O(n).
 *   - Space (Mean): O(1) auxiliary space.
 */
function maxArea(heights: number[]): number {
  let lower = 0;
  let upper = heights.length - 1;
  let result = (upper - lower) * Math.min(heights[lower], heights[upper]);
  while (lower < upper) {
    const lastFillHeight = Math.min(heights[lower], heights[upper]);
    while (lower < upper && heights[lower] <= lastFillHeight) lower += 1;
    while (upper > lower && heights[upper] <= lastFillHeight) upper -= 1;
    result = Math.max((upper - lower) * Math.min(heights[lower], heights[upper]), result);
  }
  return result;
}

export {};
