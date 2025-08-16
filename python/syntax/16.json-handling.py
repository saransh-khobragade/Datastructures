import json

x = '{ "name":"John", "age":30, "city":"New York"}'

# Parse JSON to dictionary
y = json.loads(x)
print(y["age"])  # 30

# Parse dictionary to JSON
z = json.dumps(y)
print(z)  # {"name": "John", "age": 30, "city": "New York"}

# Readind json from file
# with open("python/syntax/data.json", "r") as f:
#     data = json.load(f)
#     print(data)

# Writing json to file
# with open("python/syntax/data.json", "w") as f:
#     json.dump(data, f)


# Pretty print json
# print(json.dumps(data, indent=4))
