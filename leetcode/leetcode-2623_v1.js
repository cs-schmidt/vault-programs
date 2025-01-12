/**
 * Problem 2623: Memoize
 *
 * Version: Original
 *
 * Constraints:
 *   1. 0 <= a, b <= 10^5
 *   2. 1 <= n <= 10
 *   3. 0 <= actions.length <= 10^5
 *   4. actions.length === values.length
 *   5. actions[i] is one of "call" and "getCallCount"
 *   6. fnName is one of "sum", "factorial" and "fib"
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

// NOTE: You can further optimize the solution by encoding inputs in a cleaner way.

/**
 * Function: memoize
 * Algorithmic Paradigm: ???
 * Programming Paradigm: ???
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const memo = Object.create(null);
  return function memoizedFn(...args) {
    const code = args.reduce((id, value) => `${id}.${value}`, '');
    return code in memo ? memo[code] : (memo[code] = fn(...args));
  };
}
