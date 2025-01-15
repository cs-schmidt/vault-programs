"""
Problems 2885: Rename Columns

Version: Original/Optimized

Constraints: None
"""

import pandas as pd


def renameColumns(students: pd.DataFrame) -> pd.DataFrame:
    """
    Function: rename_columns
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Declarative
    Complexity:
        - Time: O(pd.DataFrame.rename).
        - Space: O(pd.DataFrame.rename).
    """
    students.rename(
        columns={
            "id": "student_id",
            "first": "first_name",
            "last": "last_name",
            "age": "age_in_years",
        },
        inplace=True,
    )
    return students
