from typing import List
from collections import defaultdict 
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        mp=defaultdict(list)
        bl=defaultdict(bool)
        mx=0
        for i in nums:
            if bl[i]:
                continue 
            bl[i]=True
            l,r=i,i
            if mp[i+1]:
                r=mp[i+1][1]
            if mp[i-1]:
                l=mp[i-1][0]
            mp[r]=[l,r]
            mp[l]=[l,r]
            mx=max(mx,r-l+1)
        return mx

s=Solution()
print(s.longestConsecutive([100,4,200,1,3,2]))