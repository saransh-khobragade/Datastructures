# 77. Combinations
# LeetCode Problem: https://leetcode.com/problems/combinations/

def combine(n, k):
    """
    Given two integers n and k, return all possible combinations of k numbers 
    chosen from the range [1, n].
    
    You may return the answer in any order.
    """
    result = []
    
    def backtrack(start, current_combination):
        if len(current_combination) == k:
            result.append(current_combination[:])
            return
        
        for i in range(start, n + 1):
            current_combination.append(i)
            backtrack(i + 1, current_combination)
            current_combination.pop()
    
    backtrack(1, [])
    return result

# Example usage
if __name__ == "__main__":
    n, k = 4, 2
    print(combine(n, k))  # [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]