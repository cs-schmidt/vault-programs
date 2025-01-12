/**
 * Problem 2705: Compact Object
 *
 * Version: Original/Optimized
 *
 * Constraints:
 *   1. obj is a valid JSON object
 *   2. 2 <= JSON.stringify(obj).length <= 10^6
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

/**
 * Function: compactObject
 * Algorithmic Paradigm: Recursion
 * Programming Paradigm: Declarative
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
function compactObject(obj: Obj): Obj {
  if (obj instanceof Array) {
    const result: Array<JSONValue> = [];
    obj.forEach((val) => {
      if (val && val instanceof Object) result.push(compactObject(val));
      else if (val) result.push(val);
    });
    return result;
  }
  const result: Record<string, JSONValue> = {};
  Object.entries(obj).forEach(([key, val]) => {
    if (val && val instanceof Object) result[key] = compactObject(val);
    else if (val) result[key] = val;
  });
  return result;
}

export {};
