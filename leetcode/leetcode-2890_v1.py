"""
Problems 2890: "Reshape Data: Melt"

Version: Original/Optimized

Constraints: None
"""

import pandas as pd


def meltTable(report: pd.DataFrame) -> pd.DataFrame:
    """
    Function: melt_table
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Declarative
    Complexity:
        - Time: O(pd.DataFrame.melt).
        - Space: O(pd.DataFrame.melt).
    """
    return report.melt(id_vars="product", var_name="quarter", value_name="sales")
