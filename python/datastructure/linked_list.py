# Linked List implementation in Python
# Singly linked list with append, prepend, delete, find, reverse, and utility methods

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
        self.size += 1
    
    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        self.size += 1
    
    def delete(self, data):
        if not self.head:
            return False
        
        if self.head.data == data:
            self.head = self.head.next
            self.size -= 1
            return True
        
        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                self.size -= 1
                return True
            current = current.next
        return False
    
    def find(self, data):
        current = self.head
        while current:
            if current.data == data:
                return current
            current = current.next
        return None
    
    def reverse(self):
        prev = None
        current = self.head
        next_node = None
        
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head = prev
    
    def is_empty(self):
        return self.head is None
    
    def get_size(self):
        return self.size
    
    def peek(self):
        return self.head.data if self.head else None
    
    def get_at(self, index):
        if index < 0 or index >= self.size:
            return None
        
        current = self.head
        count = 0
        
        while count < index:
            current = current.next
            count += 1
        
        return current.data
    
    def insert_at(self, data, index):
        if index < 0 or index > self.size:
            return False
        
        if index == 0:
            self.prepend(data)
            return True
        
        new_node = Node(data)
        current = self.head
        count = 0
        
        while count < index - 1:
            current = current.next
            count += 1
        
        new_node.next = current.next
        current.next = new_node
        self.size += 1
        return True
    
    def remove_at(self, index):
        if index < 0 or index >= self.size:
            return None
        
        if index == 0:
            data = self.head.data
            self.head = self.head.next
            self.size -= 1
            return data
        
        current = self.head
        count = 0
        
        while count < index - 1:
            current = current.next
            count += 1
        
        data = current.next.data
        current.next = current.next.next
        self.size -= 1
        return data
    
    def clear(self):
        self.head = None
        self.size = 0
    
    def to_array(self):
        result = []
        current = self.head
        
        while current:
            result.append(current.data)
            current = current.next
        
        return result
    
    def display(self):
        print(f"LinkedList: {self.to_array()}") 