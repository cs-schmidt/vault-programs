"""
Problems 2883: Drop Missing Data

Version: Original/Optimized

Constraints: None
"""

import pandas as pd


def dropMissingData(students: pd.DataFrame) -> pd.DataFrame:
    """
    Function: drop_missing_data
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Declarative
    Complexity:
        - Time: O(pd.DataFrame.dropna).
        - Space: O(pd.DataFrame.dropna).
    """
    students.dropna(subset="name", inplace=True)
    return students
