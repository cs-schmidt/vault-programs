/**
 * Problem 735: Asteroid Collision
 *
 * Version: Original
 *
 * Constraints:
 *   1. 2 <= asteroids.length <= 10^4
 *   2. -1000 <= asteroids[i] <= 1000
 *   3. asteroids[i] != 0
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.
// FIXME: Eliminate errors reported by TS compiler.

/**
 * Function: collisions
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(n^2).
 *   - Space: O(n).
 */
function asteroidCollision(asteroids: number[]): number[] {
  let result: number[] = [];
  let lastPassLength: number = asteroids.length;
  while (true) {
    for (const asteroid of asteroids) {
      const direction = Math.sign(asteroid);
      if ((Math.sign(result.at(-1)) || direction) > direction) {
        if (Math.abs(result.at(-1)) < Math.abs(asteroid)) {
          result.pop();
          result.push(asteroid);
        } else if (Math.abs(result.at(-1)) === Math.abs(asteroid)) {
          result.pop();
        }
        continue;
      }
      result.push(asteroid);
    }
    if (result.length === lastPassLength) break;
    asteroids = result;
    result = [];
    lastPassLength = asteroids.length;
  }
  return result;
}

export {};
