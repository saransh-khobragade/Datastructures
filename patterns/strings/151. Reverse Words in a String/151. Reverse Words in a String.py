"""
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters.
The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Input: s = "the sky is blue"
Output: "blue is sky the"
"""


class Solution:
    def reverseWords(self, s: str) -> str:
        arr = s.split(" ")
        arr.reverse()
        arr = [word for word in arr if word.strip()]
        return " ".join(arr).strip()


s = Solution()
print(s.reverseWords(" the sky is blue "))

"""
Time complexity: O(N)
Space complexity: O(N)
where N is the length of the input string.
"""
