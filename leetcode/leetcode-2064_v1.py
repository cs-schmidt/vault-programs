"""
Problem 2064: Minimized Maximum of Products Distributed to Any Store

Version: Original

Constraints:
    1. 1 <= |quantities| <= n <= 10^5
    2. 1 <= quantities[i] <= 10^5
"""

# TODO: Enhance code cleanliness.
# TODO: Determine algorithmic paradigm and techniques.
# TODO: Finish complexity analysis.

from math import ceil


class Solution:
    def minimizedMaximum(self, n: int, quantities: list[int]) -> int:
        """
        Function: minimized_maximum
        Algorithmic Paradigm: ???
        Programming Paradigm: Imperative
        Complexity:
          - Time: O(log(|quantities|*max{quantities})).
          - Space: O(1).
        """
        upper = max(quantities)
        lower = ceil(sum(quantities) / n)
        while lower < upper:
            middle = (lower + upper) // 2
            if is_distributable(middle, n, quantities):
                upper = middle
            else:
                lower = middle + 1
        return lower


# Helpers
# =========================================================================== 
def is_distributable(x: int, n: int, quantities: list[int]) -> bool:
    quotient_ceiling_sum: int = 0
    for q in quantities:
        quotient_ceiling_sum += ceil(q / x)
    return quotient_ceiling_sum <= n
