# 46. Permutations
# LeetCode Problem: https://leetcode.com/problems/permutations/

def permute(nums):
    """
    Given an array nums of distinct integers, return all the possible permutations. 
    You can return the answer in any order.
    """
    result = []
    
    def backtrack(current_permutation):
        if len(current_permutation) == len(nums):
            result.append(current_permutation[:])
            return
        
        for num in nums:
            if num not in current_permutation:
                current_permutation.append(num)
                backtrack(current_permutation)
                current_permutation.pop()
    
    backtrack([])
    return result

# Example usage
if __name__ == "__main__":
    nums = [1, 2, 3]
    print(permute(nums))  # [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]