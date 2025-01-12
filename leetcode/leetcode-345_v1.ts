/**
 * Problem 345: Reverse Vowels of a String.
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= s.length <= 3 * 10^5
 *   2. s consist of printable ASCII characters.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: reverseVowels
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n).
 *   - Space: O(1).
 */
function reverseVowels(s: string): string {
  let lowerVowelIdx = 0;
  let upperVowelIdx = s.length - 1;
  const vowelRegex = /^[aeiou]$/i;
  while (lowerVowelIdx < upperVowelIdx) {
    // Find the index of the next vowel to the left of `rightVowelIndex`.
    while (!vowelRegex.test(s[lowerVowelIdx]) && lowerVowelIdx < s.length)
      lowerVowelIdx += 1;
    // Find the index of the next vowel to the right of `leftVowelIndex`.
    while (!vowelRegex.test(s[upperVowelIdx]) && upperVowelIdx >= 0) upperVowelIdx -= 1;
    if (lowerVowelIdx < upperVowelIdx) {
      // Swap the vowels at `leftVowelIndex` and `rightVowelIndex`.
      const temp = s[lowerVowelIdx];
      s = s.slice(0, lowerVowelIdx) + s[upperVowelIdx] + s.slice(lowerVowelIdx + 1);
      s = s.slice(0, upperVowelIdx) + temp + s.slice(upperVowelIdx + 1);
      // Prevent the enclosing loop from continuing infinitely.
      lowerVowelIdx += 1;
      upperVowelIdx -= 1;
    }
  }
  return s;
}

export {};
