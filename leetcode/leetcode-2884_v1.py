"""
Problems 2884: Modify Columns

Version: Original/Optimized

Constraints: None
"""

import pandas as pd


def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame:
    """
    Function: modify_salary_column
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Imperative
    Complexity:
        - Time: Θ(rows).
        - Space: Θ(1).
    """
    employees["salary"] *= 2
    return employees
