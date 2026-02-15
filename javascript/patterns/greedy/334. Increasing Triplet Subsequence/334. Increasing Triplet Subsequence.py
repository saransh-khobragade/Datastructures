# 334. Increasing Triplet Subsequence
# LeetCode Problem: https://leetcode.com/problems/increasing-triplet-subsequence/

def increasingTriplet(nums):
    """
    Given an integer array nums, return true if there exists a triple of indices (i, j, k) 
    such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, 
    return false.
    """
    if len(nums) < 3:
        return False
    
    first = float('inf')
    second = float('inf')
    
    for num in nums:
        if num <= first:
            first = num
        elif num <= second:
            second = num
        else:
            return True
    
    return False

# Example usage
if __name__ == "__main__":
    nums = [1, 2, 3, 4, 5]
    print(increasingTriplet(nums))  # True
    
    nums = [5, 4, 3, 2, 1]
    print(increasingTriplet(nums))  # False