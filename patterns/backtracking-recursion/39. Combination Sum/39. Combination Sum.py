# 39. Combination Sum
# LeetCode Problem: https://leetcode.com/problems/combination-sum/

def combinationSum(candidates, target):
    """
    Given an array of distinct integers candidates and a target integer target, 
    return a list of all unique combinations of candidates where the chosen numbers 
    sum to target. You may return the combinations in any order.
    
    The same number may be chosen from candidates an unlimited number of times.
    """
    result = []
    
    def backtrack(start, current_combination, remaining_target):
        if remaining_target == 0:
            result.append(current_combination[:])
            return
        
        for i in range(start, len(candidates)):
            if candidates[i] <= remaining_target:
                current_combination.append(candidates[i])
                backtrack(i, current_combination, remaining_target - candidates[i])
                current_combination.pop()
    
    backtrack(0, [], target)
    return result

# Example usage
if __name__ == "__main__":
    candidates = [2, 3, 6, 7]
    target = 7
    print(combinationSum(candidates, target))  # [[2, 2, 3], [7]]