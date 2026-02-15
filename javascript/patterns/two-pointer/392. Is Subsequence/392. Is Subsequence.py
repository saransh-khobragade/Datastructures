"""
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
Input: s = "abc", t = "ahbgdc"
Output: true
"""


class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i = 0
        j = 0

        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                i += 1
                j += 1
            else:
                j += 1
        if i == len(s):
            return True
        else:
            return False


s = Solution()
print(s.isSubsequence("abc", "ahbgdc"))

# Time complexity: O(n)
# Space complexity: O(1)
# Youtube: https://youtu.be/ZGrk5rLYzPs
