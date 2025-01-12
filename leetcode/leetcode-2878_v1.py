"""
Problem 2878: Get the Size of a DataFrame

Version: Original/Optimized

Constrains: None
"""

import pandas as pd


def getDataframeSize(players: pd.DataFrame) -> list[int]:
    """
    Function: get_dataframe_size
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Declarative
    Complexity:
        - Time: Θ(1).
        - Space: Θ(1).
    """
    return list(players.shape)
