"""
Problems 2891: Method Chaining

Version: Original/Optimized

Constraints: None
"""

import pandas as pd


def findHeavyAnimals(animals: pd.DataFrame) -> pd.DataFrame:
    """
    Function: find_heavy_animals
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Declarative
    Complexity:
        - Time: O(rows * log(rows)).
        - Space: O(rows).
    """
    return (
        animals.loc[animals["weight"] > 100, ["name", "weight"]]
        .sort_values("weight", ascending=False)
        .drop(columns="weight")
    )
