"""
Problems 2886: Change Data Type

Version: Original/Optimized

Constraints: None
"""

import pandas as pd


def changeDatatype(students: pd.DataFrame) -> pd.DataFrame:
    """
    Function: change_dtype
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Imperative
    Complexity:
        - Time: O(pd.Series.astype).
        - Space: O(pd.Series.astype).
    """
    students["grade"] = students["grade"].astype(int)
    return students
