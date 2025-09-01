"""
Two strings are considered close if you can attain one from the other using the following operations:
Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.
Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
"""

from typing import List


class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:

        hmap1 = {}
        hmap2 = {}
        for x in list(word1):
            if x in hmap1:
                hmap1[x] = hmap1[x] + 1
            else:
                hmap1[x] = 1

        for x in list(word2):
            if x in hmap2:
                hmap2[x] = hmap2[x] + 1
            else:
                hmap2[x] = 1

        freq1 = []
        for x, y in hmap1.items():
            if x not in hmap2:
                return False
            freq1.append(y)
        freq1.sort()

        freq2 = []
        for y in hmap2.values():
            freq2.append(y)

        freq2.sort()
        return freq1 == freq2


s = Solution()
print(s.closeStrings("a", "aa"))
