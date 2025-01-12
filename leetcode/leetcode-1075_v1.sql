/**
 * Problem 1075: Project Employees I 
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
  proj.project_id, 
  ROUND(AVG(emp.experience_years), 2) AS average_years
FROM Project proj
INNER JOIN Employee emp
  ON proj.employee_id = emp.employee_id
GROUP BY 
  proj.project_id
