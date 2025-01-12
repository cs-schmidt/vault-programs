/**
 * Problem 1207: Unique Number of Occurences
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= arr.length <= 1000
 *   2. -1000 <= arr[i] <= 1000
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.
// FIXME: Eliminate errors reported by TS compiler.

/**
 * Function: uniqueOccurrences
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(n).
 */
function uniqueOccurrences(arr: number[]): boolean {
  const elementFrequencies: Map<number, number> = new Map();
  const distictFrequencies: Set<number> = new Set();
  for (const element of arr)
    elementFrequencies.set(element, elementFrequencies.get(element) + 1 || 1);
  for (const frequency of elementFrequencies.values()) distictFrequencies.add(frequency);
  return elementFrequencies.size === distictFrequencies.size;
}

export {};
