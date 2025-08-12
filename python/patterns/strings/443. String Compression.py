"""
Given an array of characters chars, compress it using the following algorithm:
Begin with an empty string s. For each group of consecutive repeating characters in chars:
If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars.
Note that group lengths that are 10 or longer will be split into multiple characters in chars.
After you are done modifying the input array, return the new length of the array.
Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
"""

from typing import List


class Solution:
    def compress(self, chars: List[str]) -> int:
        i = j = 0
        result = ""

        if len(chars) == 1:
            return 1

        while i < len(chars) and j < len(chars):

            if chars[j] == chars[i]:
                j += 1
            else:
                if j - i > 1:
                    result += chars[i] + f"{j-i}"
                else:
                    result += chars[i]

                i = j
        if j - i > 1:
            result += chars[i] + f"{j-i}"
        else:
            result += chars[i]

        for i in range(len(result)):
            chars[i] = result[i]

        chars = chars[0 : len(result)]
        # print(chars)
        return len(result)


s = Solution()
print(s.compress(["a", "b", "c"]))
