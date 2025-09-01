# blank dicktionary
dic = {}
dic["a"] = 5
dic["b"] = 10

# how to loop over hashmap
for x, y in dic.items():
    print(x, y)

for x in dic.keys():
    print(x)

for y in dic.values():
    print(y)

# how to check key exists in hashmap
if "x" in dic:
    dic["x"] += 1
else:
    dic["x"] = 1


# Set unique but no unordered
set_itmes = {
    "A": set(["B", "C"]),
    "B": set(["A", "D", "E"]),
    "C": set(["A", "F"]),
    "D": set(["B"]),
    "E": set(["B", "F"]),
    "F": set(["C", "E"]),
}
print(set_itmes)

# hashmap key value pairs can use immutable keys mutabale values
hashmap = {"A": 12, "B": 122, "C": 45, "D": 76, "E": 23, "F": 2323}
print(hashmap)

print(hashmap.keys())
print(hashmap.values())


# add item or update to hashmap
hashmap["G"] = 31
hashmap.update({"G": 32})

# remove item from hashmap
hashmap.pop("F")

# get element
hashmap.get("A", 0)  # 0 is default value in case element does not exists

# loop in hashmap for key and value
for key, value in hashmap.items():
    print(key, value)

# loop in dict for index and value
for index, value in enumerate(hashmap):
    print(index, value)

# sorting hashmap by its values and converting to list to tuple
print(sorted(hashmap.items(), key=lambda x: x[1], reverse=False))

# sorting hashmap by its keys and converting to list to tuple
print(sorted(hashmap.items(), key=lambda x: x[0], reverse=False))

# complex key in hashmap using tupple
d = {}
d[("a", "b", "c")] = 1
print(d)
