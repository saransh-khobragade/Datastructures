# 605. Can Place Flowers
# LeetCode Problem: https://leetcode.com/problems/can-place-flowers/

def canPlaceFlowers(flowerbed, n):
    """
    You have a long flowerbed in which some of the plots are planted, and some are not. 
    However, flowers cannot be planted in adjacent plots.
    
    Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 
    means not empty, and an integer n, return true if n new flowers can be planted in 
    the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
    """
    count = 0
    i = 0
    
    while i < len(flowerbed):
        if flowerbed[i] == 0:
            # Check if previous and next plots are empty (or out of bounds)
            prev_empty = (i == 0 or flowerbed[i-1] == 0)
            next_empty = (i == len(flowerbed)-1 or flowerbed[i+1] == 0)
            
            if prev_empty and next_empty:
                flowerbed[i] = 1
                count += 1
                i += 2  # Skip next plot since we can't plant adjacent
            else:
                i += 1
        else:
            i += 2  # Skip next plot if current is planted
    
    return count >= n

# Example usage
if __name__ == "__main__":
    flowerbed = [1, 0, 0, 0, 1]
    n = 1
    print(canPlaceFlowers(flowerbed, n))  # True
    
    flowerbed = [1, 0, 0, 0, 1]
    n = 2
    print(canPlaceFlowers(flowerbed, n))  # False