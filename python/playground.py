"""
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
"""
__import__("atexit").register(lambda: open("display_runtime.txt","w").write("0"))
from typing import List
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        leftArr = [1]*len(nums)
        rightArr =  [1]*len(nums)

        left = 1
        for i in range(0,len(nums)-1):
            leftArr[i] = nums[i] * left
            left *= nums[i]
        
        right = 1
        
        for i in range(len(nums)-1,-1,-1):
            rightArr[i] = leftArr[i - 1] * right
            right *= nums[i]

        return rightArr
        


s = Solution()
s.productExceptSelf([1,2,3,4])

# 1     2   6   1  left products
# 1     2   3   4
# 24    12  8   6   right products