# LENGTH OF STRING----------------------------------------
a = "Hello, World!"
print(len(a))  # 13

# CHECK IN STRING----------------------------------------
txt = "The best things in life are free!"
if "free" in txt:
    print("Yes, 'free' is present.")
if "abc" not in txt:
    print("Yes, 'abc' not is present.")

# Splitting a string into array----------------------------------------
txt = "Hello, World!"
print(list(txt))  # ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']
# ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']

# Joining a list into a string----------------------------------------
arr = ["Hello", "World"]
print(" ".join(arr))  # Hello World

# Slicing a string----------------------------------------
str = "Saransh"
print(str[1])  # a from index 1 only one element
print(str[-2])  # s from last second index only one element
print(str[2:5])  # llo [including:excluding]

# Triming a string----------------------------------------
str = "   Hello, World!   "
print(str.strip())  # "Hello, World!" (removes leading and trailing spaces)
print(str.lstrip())  # "Hello, World!   " (removes leading spaces)
print(str.rstrip())  # "   Hello, World!" (removes trailing spaces)
