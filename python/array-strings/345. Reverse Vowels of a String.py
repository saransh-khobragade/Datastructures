"""
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
Input: s = "IceCreAm"
Output: "AceCreIm"
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".
"""


class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
        str = s.split()
        print(str)
        start = 0
        end = len(s) - 1
        while start < end:
            if s[start] in vowels and s[end] in vowels:
                s[start], s[end] = s[end], s[start]
            elif s[start] not in vowels:
                start += 1
            elif s[end] not in vowels:
                end -= 1

        return s


s = Solution()
print(s.reverseVowels("IceCreAm"))
