
# loop for elements
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print("first " + str(x))
# first apple
# first banana
# first cherry

# loop for index
for i in range(len(fruits)):
    print(i)
# 0
# 1
# 2

# loop for index and element
for i, v in enumerate(fruits):
    print(i, v)
# 0 apple
# 1 banana
# 2 cherry

# loop for range
for i in range(2):
    print(i)
# 0
# 1

# loop for range
for i in range(2, 3):
    print("third " + str(i))
# third 2
# third 3

# loop for range with step
for i in range(2, 6, 2):
    print("fourth " + str(i))
# fourth 2
# fourth 4

d = {"name": "John", "age": 30, "city": "New York"}
# loop in dictionry/object
for x, y in d.items():
    print(x, y)
# name John
# age 30
# city New York
