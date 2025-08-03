arr = ["apple", "banana", "cherry", "berry", "carry"]

print(arr[0])  # apple

# Length
print(len(arr))  # 5

# Add item
arr.append("pineapple")
print(arr)  # ['apple', 'banana', 'cherry', 'berry', 'carry', 'pineapple']

# Insert at index
arr.insert(2, "potatoe")
print(arr)  # ['apple', 'banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple']

# Extend/merge
arr2 = ("kiwi", "orange")
arr.extend(arr2)
print(
    arr
)  # ['apple', 'banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

# Remove
arr.remove("apple")
print(
    arr
)  # ['banana', 'potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

# Remove at index
arr.pop(0)
print(arr)  # ['potatoe', 'cherry', 'berry', 'carry', 'pineapple', 'kiwi', 'orange']

# Sort list
arr.sort()
print(arr)  # ['berry', 'carry', 'cherry', 'kiwi', 'orange', 'pineapple', 'potatoe']
arr.sort(reverse=True)
print(arr)  # ['potatoe', 'pineapple', 'orange', 'kiwi', 'cherry', 'carry', 'berry']

# Reverse
arr.reverse()
print(arr)  # ['berry', 'carry', 'cherry', 'kiwi', 'orange', 'pineapple', 'potatoe']

# Dynamic Array
arr = [1] * 5
print(arr)

# map an array
arr = [1, 2, 3, 4, 5]
squared_arr = list(map(lambda x: x**2, arr))
print(squared_arr)  # [1, 4, 9, 16, 25]
squared_arr = [x**2 for x in arr]
print(squared_arr)  # [1, 4, 9, 16, 25]

# filter an array
filtered_arr = list(filter(lambda x: x % 2 == 0, arr))
print(filtered_arr)  # [2, 4]
filtered_arr = [x for x in arr if x % 2 == 0]
print(filtered_arr)  # [2, 4]

# reduce an array
from functools import reduce

reduced_value = reduce(lambda x, y: x + y, arr)
print(reduced_value)  # 15
# List comprehension
squared_arr = [x**2 for x in arr]
print(squared_arr)  # [1, 4, 9, 16, 25]
