/**
 * Problem 151: Reverse Words in a String
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. 1 <= str.length <= 10^4
 *   2. str contains English letters (uppercase and lowercase), digits, and spaces.
 *   3. There is at least one word in str.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.

/**
 * Function: reverseWords
 * Algorithmic Paradigm: Ad Hoc
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time: Θ(n).
 *   - Space: Θ(n).
 */
function reverseWords(str: string): string {
  return str.trim().split(/\s+/).reverse().join(' ');
}

export {};
