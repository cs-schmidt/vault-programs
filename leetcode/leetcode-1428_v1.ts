/**
 * Problem 1428: Leftmost Column with at Least a One
 *
 * Version: Original
 *
 * Constraints:
 *   1. rows == mat.length
 *   2. cols == mat[i].length
 *   3. 1 <= rows, cols <= 100
 *   4. mat[i][j] is either 0 or 1
 *   5. mat[i] is sorted in non-decreasing order
 *   6. BinaryMatrix.get can only be called 1000 times or less
 *   7. You can only access the binary matrix through it's interface
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

// NOTE: Premium-only problem (don't bother optimizing).

/** Represents a binary matrix type. */
interface BinaryMatrix {
  get(row: number, col: number): number;

  dimensions(): number[];
}

/**
 * Function: leftMostColumnWithOne
 * Algorithmic Paradigm: ???
 * Programming Paradigm: ???
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
function leftMostColumnWithOne(binaryMatrix: BinaryMatrix): number {
  const [rows, cols] = binaryMatrix.dimensions();
  let currRow = 0;
  let maxCol: number = cols - 1;
  let found = false;
  while (currRow < rows && maxCol !== 0) {
    let lowIdx = 0;
    let highIdx: number = maxCol;
    while (lowIdx < highIdx) {
      const midIdx: number = Math.floor((highIdx + lowIdx) / 2);
      if (binaryMatrix.get(currRow, midIdx) === 1) highIdx = midIdx;
      else lowIdx = midIdx + 1;
    }
    if (lowIdx <= maxCol && binaryMatrix.get(currRow, lowIdx) === 1) {
      maxCol = lowIdx;
      if (!found) found = true;
    }
    currRow += 1;
  }
  return found ? maxCol : -1;
}

export {};
