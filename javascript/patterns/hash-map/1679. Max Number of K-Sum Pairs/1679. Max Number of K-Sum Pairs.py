"""
You are given an integer array nums and an integer k.
In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
Return the maximum number of operations you can perform on the array.
Input: nums = [1,2,3,4], k = 5
Output: 2"""

from typing import List


class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        map = {}
        ops = 0

        for x in nums:
            if k - x in map and map[k - x] > 0:
                ops += 1
                map[k - x] -= 1
            else:
                map[x] = map.get(x, 0) + 1
        return ops


s = Solution()
print(s.maxOperations([1, 2, 3, 4, 5], 5))  # Expected: 2

1, 2, 3, 4, 5
4, 3, 2, 1, 0

# Time complexity: O(n)
# Space complexity: O(n)
# Youtube : https://youtu.be/XNsdtSBT3Ek
