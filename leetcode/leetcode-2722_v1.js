/**
 * Problem 2722: Join Two Arrays by ID
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. objects1 and objects2 are valid JSON arrays
 *   2. Each object in objects1 and objects2 has a unique integer id key
 *   3. 2 <= JSON.stringify(arr1).length <= 10^6
 *   4. 2 <= JSON.stringify(arr2).length <= 10^6
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: join
 * Algorithmic Paradigm: ???
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time: O(max{|objects1|, |objects2|}).
 *   - Space:  O(|objects1 ‖ objects2|).
 */
/**
 * @param {Array} objects1
 * @param {Array} objects2
 * @return {Array}
 */
function join(objects1, objects2) {
  const properties = Object.create(null);
  objects1.forEach((obj) => (properties[obj.id] = obj));
  objects2.forEach((obj) => {
    if (obj.id in properties) properties[obj.id] = Object.assign(properties[obj.id], obj);
    else properties[obj.id] = obj;
  });
  return Object.values(properties).sort(({ id: a }, { id: b }) => a - b);
}
