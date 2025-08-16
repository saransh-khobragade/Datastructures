# Min Heap implementation in Python
# Basic heap operations: insert, extractMin, peek, isEmpty, size, clear, and toArray methods

import heapq

class MinHeap:
    def __init__(self):
        self.heap = []
    
    def insert(self, value):
        heapq.heappush(self.heap, value)
    
    def extract_min(self):
        if self.is_empty():
            return None
        return heapq.heappop(self.heap)
    
    def peek(self):
        if self.is_empty():
            return None
        return self.heap[0]
    
    def is_empty(self):
        return len(self.heap) == 0
    
    def size(self):
        return len(self.heap)
    
    def clear(self):
        self.heap = []
    
    def to_array(self):
        return self.heap.copy()
    
    def display(self):
        print(f"Heap: {self.heap}") 