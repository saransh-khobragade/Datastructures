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
        if len(chars) == 0:
            return 0
        if len(chars) == 1:
            return 1

        read = 0
        write = 0

        while read < len(chars):
            count = 0
            curr = chars[read]
            if chars[read] == curr:
                read += 1
                count += 1
            else:
                curr

            while read < len(chars) and chars[read] == curr:
                read += 1
                count += 1

            chars[write] = curr
            write += 1

            if count > 1:
                if count < 10:
                    chars[write] = str(count)
                    write += 1
                else:
                    chars[write : write + len(str(count))] = list(str(count))
                    write += len(str(count))

        return write


s = Solution()
v = ["a", "a", "b", "b", "c", "c", "c"]
print(s.compress(v))
print(v)
