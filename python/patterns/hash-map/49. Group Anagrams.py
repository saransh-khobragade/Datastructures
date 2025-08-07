from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = {}
        for word in strs:
            temp = ''.join(sorted(word))
            if temp in res:
                res[temp].append(word)
            else:
                res[temp] = [word]
        result =[]
        for x in res:
            result.append(res[x])
        return result


        
strs = ["eat","tea","tan","ate","nat","bat"]
s = Solution()
print(s.groupAnagrams(strs))

"""
Time complexity: O(N * K log K)
Space complexity: O(N * K)
where N is the number of strings and K is the maximum length of any string.
"""



# Input: strs = ["eat","tea","tan","ate","nat","bat"]
# Output: [["bat"],["nat","tan"],["ate","eat","tea"]]