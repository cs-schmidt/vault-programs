/**
 * Problem 216: Combination Sum III
 *
 * Version: Original
 *
 * Constraints:
 *   1. 2 <= k <= 9
 *   2. 1 <= n <= 60
 */

// TODO: Include explanation.
// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: combinationSum3
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Declarative
 * Complxity:
 *   - Time: O([n choose k]).
 *   - Space: O([n choose k]).
 */
function combinationSum3(k: number, n: number): number[][] {
  return generateCombinations(k).filter(
    (nums) => nums.reduce((acc, v) => acc + v, 0) === n
  );

  // ===========================================================================
  /**
   * Finds all the k-length combinations of the numbers {9, 8, ⋯, 1}, in descending order
   * of each combination's summed value.
   */
  function generateCombinations(k: number): number[][] {
    const result: number[][] = [];
    (function generateCombinationHelper(
      currentCombination: number[],
      start: number
    ): void {
      if (currentCombination.length === k) {
        result.push([...currentCombination.reverse()]);
        currentCombination.reverse();
        return;
      }
      for (let i = 9; i >= start; i--) {
        currentCombination.push(i);
        generateCombinationHelper(currentCombination, i + 1);
        currentCombination.pop();
      }
    })([], 1);
    return result;
  }
}

export {};
