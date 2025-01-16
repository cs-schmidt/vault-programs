"""
Problems 2889: "Reshape Data: Pivot"

Version: Original/Optimized

Constraints: None
"""

import pandas as pd


def pivotTable(weather: pd.DataFrame) -> pd.DataFrame:
    """
    Function: pivot_table
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Declarative
    Complexity:
        - Time: O(pd.DataFrame.pivot).
        - Space: O(pd.DataFrame.pivot).
    """
    return weather.pivot(index="month", columns="city", values="temperature")
