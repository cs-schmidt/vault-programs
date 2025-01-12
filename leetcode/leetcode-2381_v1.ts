/**
 * Problem 2381: Shifting Letters II
 *
 * Version: Original
 *
 * Constraints:
 *   1. 1 <= str.length, shifts.length <= 5 * 10^4
 *   2. shifts[i].length == 3
 *   3. 0 <= start_i <= end_i < s.length
 *   4. 0 <= direction_i <= 1
 *   5. s consists of lowercase English letters.
 */

// TODO: Finish solution.

// NOTE: There's an approach with an interval tree data structure.

/**
 * Function: executeShifts
 * Algorithmic Paradigm: ???
 * Programming Paradigm: ???
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
function shiftingLetters(str: string, shifts: number[][]): string {
  const shiftMap: number[] = getShiftMap(str, shifts);
  return applyShifts(str, shiftMap);

  // ===========================================================================
  function getShiftMap(str: string, shifts: number[][]): number[] {
    const result = [];
    sortShifts(shifts);
    let head = 0;
    let tail = 0;
    while (head < str.length) {
      while (shifts[tail][0] == shifts[head][0]) tail += 1;
      do {
        tail -= 1;
        result[tail] += 1;
      } while (true);
      head = tail;
    }
    return result;
  }

  function applyShifts(str: string, shiftMap: number[]): string {
    return str;
  }

  function sortShifts(shifts: number[][]): void {
    shifts.sort((shift1, shift2) => {
      if (shift1[0] < shift2[0]) return -1;
      if (shift1[0] > shift2[0]) return 1;
      if (shift1[1] < shift2[1]) return -1;
      if (shift1[1] > shift2[1]) return 1;
      return 0;
    });
  }
}

export {};
