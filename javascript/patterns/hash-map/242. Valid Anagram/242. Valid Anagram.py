class Solution:
    def isAnagram(s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        hmap = {}

        # count chars from s
        for ch in s:
            if ch in hmap:
                hmap[ch] += 1
            else:
                hmap[ch] = 1

        # reduce counts with t
        for ch in t:
            if ch in hmap:
                hmap[ch] -= 1

        # check all counts
        for val in hmap.values():
            if val != 0:
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
