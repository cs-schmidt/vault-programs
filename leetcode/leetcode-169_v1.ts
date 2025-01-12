/**
 * Problem 169: Majority Element
 *
 * Version: Original
 *
 * Constraints:
 *   1. n == nums.length
 *   2. 1 <= n <= 5 * 10^4
 *   3. -10^9 <= nums[i] <= 10^9
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: majorityElement
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(n).
 */
function majorityElement(nums: number[]): number {
  let index = 0;
  const frequencies: Record<string, number> = {};
  while (true) {
    const currentNum = nums[index];
    if (frequencies[currentNum]) frequencies[currentNum] += 1;
    else frequencies[currentNum] = 1;
    if (frequencies[currentNum] > Math.floor(nums.length / 2)) return currentNum;
    index += 1;
  }
}

export {};
