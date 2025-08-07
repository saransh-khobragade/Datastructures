# https://leetcode.com/problems/product-of-array-except-self/
# Input: nums = [1,2,3,4]
# Output: [24,12,8,6]

from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [1] * n
        
        # Calculate prefix products
        for i in range(1, n):
            result[i] = result[i-1] * nums[i-1]
        
        # Calculate suffix products and combine
        suffix = 1
        for i in range(n-1, -1, -1):
            result[i] = result[i] * suffix
            suffix *= nums[i]
        
        return result

s = Solution()
print(s.productExceptSelf([1,2,3,4]))

"""
Time complexity: O(N)
Space complexity: O(1) - excluding the output array
where N is the length of the input array.
""" 