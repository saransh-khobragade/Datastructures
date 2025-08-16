# Queue implementation in Python
# FIFO data structure with enqueue, dequeue, peek, isEmpty, size, clear, and toArray methods

from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, element):
        self.items.append(element)
    
    def dequeue(self):
        if self.is_empty():
            return None
        return self.items.popleft()
    
    def peek(self):
        if self.is_empty():
            return None
        return self.items[0]
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)
    
    def clear(self):
        self.items.clear()
    
    def to_array(self):
        return list(self.items)
    
    def display(self):
        print(f"Queue: {list(self.items)}") 