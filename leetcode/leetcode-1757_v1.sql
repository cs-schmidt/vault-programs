/**
 * Problem 1757: Recyclable and Low Fat Products
 *
 * Version: Original/Optimized
 */

-- TODO: Enhance code cleanliness.
-- TODO: Finish complexity analysis.

/**
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
SELECT product_id 
FROM Products 
WHERE low_fats = 'Y' AND recyclable = 'Y'
