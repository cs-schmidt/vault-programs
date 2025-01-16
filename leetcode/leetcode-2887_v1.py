"""
Problems 2887: Fill Missing Data

Version: Original/Optimized

Constraints: None
"""

import pandas as pd


def fillMissingValues(products: pd.DataFrame) -> pd.DataFrame:
    """
    Function: fill_empty_values
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Imperative
    Complexity:
        - Time: O(pd.Series.fillna).
        - Space: O(pd.Series.fillna).
    """
    products["quantity"].fillna(0, inplace=True)
    return products
