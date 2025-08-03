fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print("first " + str(x))
# first apple
# first banana
# first cherry

for x in range(len(fruits)):
    print(x)
# 0
# 1
# 2

for x in range(2):
    print(x)
# 0
# 1

for x in range(2, 3):
    print("third " + str(x))
# third 2
# third 3

for x in range(2, 6, 2):
    print("fourth " + str(x))
# fourth 2
# fourth 4

d = {"name": "John", "age": 30, "city": "New York"}
# loop in dictionry/object
for x, y in d.items():
    print(x, y)
# name John
# age 30
# city New York
