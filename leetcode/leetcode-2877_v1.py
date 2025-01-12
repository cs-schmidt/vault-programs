"""
Problem 2877: Create a DataFrame from List

Version: Original/Optimized

Constraints: None
"""

import pandas as pd


def createDataframe(student_data: list[list[int]]) -> pd.DataFrame:
    """
    Function: create_dataframe
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Declarative
    Complexity:
        Time: O(pd.DataFrame).
        Space: O(pd.DataFrame) w/ Θ(1) auxiliary.
    """
    return pd.DataFrame(data=student_data, columns=["student_id", "age"])
