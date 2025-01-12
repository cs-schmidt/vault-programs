/**
 * Problem 415: Add Strings
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= num1.length, num2.length <= 10^4
 *   2. num1 and num2 consist of only digits.
 *   3. num1 and num2 don't have any leading zeros except for the zero itself.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.
// FIXME: Eliminate errors reported by TS compiler.

/**
 * Function: addStrings
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(max{|num1|,|num2|}).
 *   - Space: O(max{|num1|,|num2|}).
 */
function addStrings(num1: string, num2: string): string {
  const digits = [];
  let carry = 0;
  let index = -1;
  while (num1.at(index) && num2.at(index)) {
    const sum = Number(num1.at(index)) + Number(num2.at(index)) + carry;
    if (sum < 10) {
      digits.unshift(sum);
      carry = 0;
    } else {
      carry = 1;
      digits.unshift(sum % 10);
    }
    index -= 1;
  }
  while (num1.at(index)) {
    const sum = Number(num1.at(index)) + carry;
    if (sum < 10) {
      digits.unshift(sum);
      carry = 0;
    } else {
      carry = 1;
      digits.unshift(sum % 10);
    }
    index -= 1;
  }
  while (num2.at(index)) {
    const sum = Number(num2.at(index)) + carry;
    if (sum < 10) {
      digits.unshift(sum);
      carry = 0;
    } else {
      carry = 1;
      digits.unshift(sum % 10);
    }
    index -= 1;
  }
  if (carry) digits.unshift(carry);
  return digits.join('');
}

export {};
