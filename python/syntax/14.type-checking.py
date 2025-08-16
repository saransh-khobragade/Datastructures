a = 1
b = "2"
c = [1, 2, 3]
d = {1, 2, 3}
e = {"a": "1", "b": "2", "c": "3"}

print(type(a))  # <class 'int'>
print(type(b))  # <class 'str'>
print(type(c))  # <class 'list'>
print(type(d))  # <class 'set'>
print(type(e))  # <class 'dict'>

# Type checking
if isinstance(a, int):
    print("a is an integer")
if isinstance(b, str):
    print("b is an string")

if type(a) == int:
    print("a is an integer")
if type(b) == str:
    print("b is an integer")
