"""
Problem 14: Longest Common Prefix

Version: Original/Optimized

Constraints:
    1. 1 <= S.length <= 200
    2. 0 <= S[i].length <= 200
    3. S[i] consists of only lowercase English letters.
"""

# TODO: Determine algorithmic paradigm and techniques.


class Solution:
    def longestCommonPrefix(self, strings: list[str]) -> str:
        """
        Function: longest_common_prefix
        Algorithmic Paradigm: Greedy
        Programming Paradigm: Imperative
        Complexity:
            - Time: O(max{|s| ∈ S}*|S|) and Ω(1).
            - Space: O(max{|s| ∈ S}) and Ω(1).
        """
        prefix = strings[0]
        for string in strings[1:]:
            limit = min(len(prefix), len(string))
            index = 0
            while index < limit and prefix[index] == string[index]: index += 1
            prefix = string[:index]
        return prefix
