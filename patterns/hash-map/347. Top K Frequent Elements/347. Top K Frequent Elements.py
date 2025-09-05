from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        dic = {}

        for x in nums:
            if x in dic:
                dic[x] += 1
            else:
                dic[x] = 1

        # Sort dictionary by frequency (most frequent first)
        out = sorted(dic.items(), key=lambda x: x[1], reverse=True)

        result = []
        for item in out:
            result.append(item[0])

        return result[:k]


s = Solution()
nums = [1, 1, 1, 2, 2, 3]
k = 2
print(s.topKFrequent(nums, k))

"""
Time complexity: O(N log N)
Space complexity: O(N)
where N is the length of the input array.
"""
