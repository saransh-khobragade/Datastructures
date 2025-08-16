# Stack implementation in Python
# LIFO data structure with push, pop, peek, isEmpty, size, clear, and toArray methods

class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, element):
        self.items.append(element)
    
    def pop(self):
        if self.is_empty():
            return None
        return self.items.pop()
    
    def peek(self):
        if self.is_empty():
            return None
        return self.items[-1]
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)
    
    def clear(self):
        self.items = []
    
    def to_array(self):
        return self.items.copy()
    
    def display(self):
        print(f"Stack: {self.items}") 