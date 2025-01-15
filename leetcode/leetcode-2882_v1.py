"""
Problems 2882: Drop Duplicate Rows

Version: Original/Optimized

Constraints: None
"""

import pandas as pd


def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:
    """
    Function: drop_duplicate_emails
    Algorithmic Paradigm: Ad Hoc
    Programming Paradigm: Declarative
    Complexity:
        - Time: O(pd.DataFrame.drop_duplicates).
        - Space: O(pd.DataFrame.drop_duplicates).
    """
    return customers.drop_duplicates("email")
