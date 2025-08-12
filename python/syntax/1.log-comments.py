# Log
print("Hello world")  # Hello world
print("Hello", 23)  # Hello 23

# Inline string substitution
print(f"Hello {23}")  # Hello 23

# String interpolation
abc = f"Hello my age is {10}"
print(abc)

# Comments
# This is a single line comment
print("Hello, World!")

# This is a multiline comment
"""
Multiline comment
"""

# String concatenation
print("Hello, " + name + "! You are " + str(age) + " years old.")

# Template strings
from string import Template

template = Template("Hello, $name! You are $age years old.")
print(template.substitute(name=name, age=age))
