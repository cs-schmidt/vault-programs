"""
Problem 2880: Select Data

Version: Original/Optimized

Constraints: None
"""

import pandas as pd


def selectData(students: pd.DataFrame) -> pd.DataFrame:
    """
    Function: select_data
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Declarative
    Complexity:
        - Time: O(DataFrame.loc).
        - Space: O(DataFrame.loc).
    """
    return students.loc[students["student_id"] == 101, ["name", "age"]]
