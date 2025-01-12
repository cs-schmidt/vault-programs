/**
 * Problem 1378: Replace Employee ID With The Unique Identifier
 * 
 * Version: Original
 */

-- TODO: Finish complexity analysis.

/**
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
SELECT 
  emp_uid.unique_id, 
  emp.name
FROM EmployeeUNI emp_uid
RIGHT JOIN Employees emp
  ON emp_uid.id = emp.id
