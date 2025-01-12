"""
Problem 2879: Display the First Three Rows

Version: Original/Optimized

Constrains: None
"""

import pandas as pd


def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
    """
    Function: select_head_rows
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Declarative
    Complexity:
        - Time: O(pd.DataFrame.head).
        - Space: O(pd.DataFrame.head).
    """
    return employees.head(3)
