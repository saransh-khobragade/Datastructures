"""
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
"""


class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = ""
        l = max(len(word1), len(word2))
        for i in range(l):
            if i < len(word1):
                result += word1[i]
            if i < len(word2):
                result += word2[i]
        return result


s = Solution()
print(s.mergeAlternately("abc", "pqr"))
"""
Time Complexity: O(n + m), loop will run with n or m length of word1 or word2 so n+m
Space Complexity: O(n + m), for the result string containing all characters from both inputs
"""
