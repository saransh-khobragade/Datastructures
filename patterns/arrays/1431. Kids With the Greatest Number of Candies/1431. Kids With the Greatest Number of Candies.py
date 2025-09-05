# 1431. Kids With the Greatest Number of Candies
# LeetCode Problem: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

def kidsWithCandies(candies, extraCandies):
    """
    Given the array candies and the integer extraCandies, where candies[i] represents 
    the number of candies that the ith kid has.
    
    For each kid, check if there is a way to distribute extraCandies among the kids 
    such that he or she can have the greatest number of candies among them.
    
    Return a boolean array result of length n, where result[i] is true if, after giving 
    the ith kid all the extraCandies, they will have the greatest number of candies 
    among all the kids, or false otherwise.
    """
    max_candies = max(candies)
    result = []
    
    for candy in candies:
        if candy + extraCandies >= max_candies:
            result.append(True)
        else:
            result.append(False)
    
    return result

# Example usage
if __name__ == "__main__":
    candies = [2, 3, 5, 1, 3]
    extraCandies = 3
    print(kidsWithCandies(candies, extraCandies))  # [True, True, True, False, True]