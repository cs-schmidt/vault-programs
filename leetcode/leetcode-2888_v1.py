"""
Problems 2888: "Reshape Data: Concatenate"

Version: Original/Optimized

Constraints: None
"""

import pandas as pd


def concatenateTables(df1: pd.DataFrame, df2: pd.DataFrame) -> pd.DataFrame:
    """
    Function: concatenate_tables
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Declarative
    Complexity:
        - Time: O(pd.concat).
        - Space: O(pd.concat).
    """
    return pd.concat([df1, df2])
