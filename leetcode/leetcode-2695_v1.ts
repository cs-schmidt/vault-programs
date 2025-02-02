/**
 * Problem 2695: Array Wrapper
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. 0 <= nums.length <= 1000
 *   2. 0 <= nums[i] <= 1000
 *   3. Note: nums is the array passed to the constructor
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

class ArrayWrapper {
  nums: number[] = [];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf(): number {
    return this.nums.reduce((result, value) => result + value, 0);
  }

  toString(): string {
    return `[${this.nums.toString()}]`;
  }
}

export {};
