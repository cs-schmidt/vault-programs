/**
 * Problem 439: Ternary Expression Parser
 *
 * Version: Original
 *
 * Constraints:
 *   1. 5 <= expression.length <= 10^4
 *   2. expression consists of single digits (0 through 9), 'T', 'F', '?', and ':'.
 *   3. It is guaranteed that expression is a valid ternary expression.
 */

// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

// NOTE: Premium-only problem (don't bother optimizing).

/**
 * This solution iteratively narrows the head and tail indices of the ternary expression
 * until they converge on the index of the result. Initially, the head and tail are set to
 * the first and last indices of the input. In each iteration, the following steps are
 * performed:
 *
 *   1. Locate the colon in the ternary, which marks the boundary between its true and
 *      false expressions.
 *   2. Evaluate the ternary's condition, with the head pointing to the condition's index.
 *   3. Based on the evaluation, update the head and tail to point to the next nested
 *      ternary expression.
 *
 * The iteration continues until the distance between the head and tail is smaller than
 * the minimum length of a ternary (5 characters). At that point, the head and tail
 * converge, and their indices represent the result of the entire expression.
 */

/**
 * Function: parseTernary
 * Algorithmic Paradigm: Ad Hoc
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: ???.
 *   - Space: Θ(1).
 */
function parseTernary(expr: string): string {
  let condIndex = 0;
  let tailIndex = expr.length - 1;
  while (integersInRange(condIndex, tailIndex) >= 5) {
    let index = condIndex + 1;
    let qmarksSeen = 1;
    let colonsSeen = 0;
    while (colonsSeen < qmarksSeen) {
      index++;
      if (expr[index] == '?') qmarksSeen++;
      else if (expr[index] == ':') colonsSeen++;
    }
    if (expr[condIndex] == 'T') {
      condIndex += 2;
      tailIndex = index - 1;
    } else condIndex = index + 1;
  }
  return expr[condIndex];

  // ===========================================================================
  function integersInRange(tail: number, head: number) {
    return Math.abs(tail - head) + 1;
  }
}

export {};
