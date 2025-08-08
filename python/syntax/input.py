# Example 1: Reading two space-separated integers
try:
    p, c = map(int, input("Enter two integers (space-separated): ").split())
    print(f"p = {p}, c = {c}")
except ValueError:
    print("Error: Please enter two space-separated integers")

# Example 2: Reading space-separated integers into a list
try:
    num = list(map(int, input("Enter space-separated integers: ").split()))
    print(f"List of integers: {num}")
except ValueError:
    print("Error: Please enter space-separated integers only")

# Example 3: Reading a string and converting to list of characters
exp = list(input("Enter a string: "))
print(f"List of characters: {exp}")

# Example 4: Reading a single integer
try:
    single_num = int(input("Enter a single integer: "))
    print(f"Single integer: {single_num}")
except ValueError:
    print("Error: Please enter a valid integer")
