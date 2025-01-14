"""
Problem 2881: Create a New Column

Version: Original/Optimized

Constraints: None
"""

import pandas as pd


def createBonusColumn(employees: pd.DataFrame) -> pd.DataFrame:
    """
    Function: append_bonus_col
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Declarative
    Complexity:
        - Time (Expected): O(rows(employees)).
        - Space (Expected): O(1).
    """
    employees["bonus"] = 2 * employees["salary"]
    return employees
