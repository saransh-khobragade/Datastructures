# 47. Permutations II
# LeetCode Problem: https://leetcode.com/problems/permutations-ii/

def permuteUnique(nums):
    """
    Given a collection of numbers, nums, that might contain duplicates, 
    return all the possible unique permutations in any order.
    """
    result = []
    nums.sort()  # Sort to handle duplicates
    
    def backtrack(current_permutation, used):
        if len(current_permutation) == len(nums):
            result.append(current_permutation[:])
            return
        
        for i in range(len(nums)):
            if used[i] or (i > 0 and nums[i] == nums[i-1] and not used[i-1]):
                continue
            
            used[i] = True
            current_permutation.append(nums[i])
            backtrack(current_permutation, used)
            current_permutation.pop()
            used[i] = False
    
    backtrack([], [False] * len(nums))
    return result

# Example usage
if __name__ == "__main__":
    nums = [1, 1, 2]
    print(permuteUnique(nums))  # [[1,1,2],[1,2,1],[2,1,1]]