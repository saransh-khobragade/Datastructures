class Solution:
    def isAnagram(s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        hmap1 = {}
        hmap2 = {}

        for i in range(len(s)):
            hmap1[s[i]] = hmap1.get(s[i], 0) + 1
            hmap2[t[i]] = hmap2.get(t[i], 0) + 1

        for ch in hmap1:
            if hmap1[ch] != hmap2.get(ch, 0):
                return False

        return True


s = Solution()
print(s.isAnagram("aacc", "ccac"))

"""
Time complexity: O(N)
Space complexity: O(1) - since we use fixed size array for character counting
where N is the length of the input strings.
"""

"""
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true
"""
