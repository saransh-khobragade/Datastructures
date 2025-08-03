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
        str = list(s)
        start = 0
        end = len(s) - 1
        while start < end:
            if s[start] in vowels and s[end] in vowels:
                str[start], str[end] = str[end], str[start]
                start += 1
                end -= 1
            elif str[start] not in vowels:
                start += 1
            elif str[end] not in vowels:
                end -= 1

        return "".join(str)


s = Solution()
print(s.reverseVowels("IceCreAm"))

"""
Time complexity: O(N)
Space complexity: O(N)
where N is the length of the input string.
"""
