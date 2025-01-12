/**
 * Problem 435: Non-overlapping Intervals
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= intervals.length <= 10^5
 *   2. intervals[i].length == 2
 *   3. -5 * 10^4 <= starti < endi <= 5 * 10^4
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: eraseOverlapIntervals
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n*log(n)).
 *   - Space: O(1).
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
  let result = 0;
  // O(n*log(n)) time
  intervals.sort((interval1, interval2) => {
    if (interval1[1] > interval2[1]) return 1;
    if (interval1[1] === interval2[1]) return 0;
    return -1;
  });
  // O(n) time
  let lastInterval = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < lastInterval[1]) result += 1;
    else lastInterval = intervals[i];
  }
  return result;
}
