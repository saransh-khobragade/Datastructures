# Graph implementation in Python
# Supports addVertex, addEdge, removeEdge, removeVertex, depthFirstSearch, breadthFirstSearch, and utility methods

from collections import defaultdict, deque

class Graph:
    def __init__(self):
        self.adjacency_list = defaultdict(list)
    
    def add_vertex(self, vertex):
        if vertex not in self.adjacency_list:
            self.adjacency_list[vertex] = []
    
    def add_edge(self, vertex1, vertex2):
        if vertex1 not in self.adjacency_list:
            self.add_vertex(vertex1)
        if vertex2 not in self.adjacency_list:
            self.add_vertex(vertex2)
        self.adjacency_list[vertex1].append(vertex2)
        self.adjacency_list[vertex2].append(vertex1)
    
    def remove_edge(self, vertex1, vertex2):
        if vertex1 in self.adjacency_list:
            if vertex2 in self.adjacency_list[vertex1]:
                self.adjacency_list[vertex1].remove(vertex2)
        if vertex2 in self.adjacency_list:
            if vertex1 in self.adjacency_list[vertex2]:
                self.adjacency_list[vertex2].remove(vertex1)
    
    def remove_vertex(self, vertex):
        if vertex in self.adjacency_list:
            while self.adjacency_list[vertex]:
                adjacent_vertex = self.adjacency_list[vertex].pop()
                self.remove_edge(vertex, adjacent_vertex)
            del self.adjacency_list[vertex]
    
    def depth_first_search(self, start):
        result = []
        visited = set()
        
        def dfs_helper(vertex):
            if vertex is None or vertex in visited:
                return
            
            visited.add(vertex)
            result.append(vertex)
            
            for neighbor in self.adjacency_list[vertex]:
                if neighbor not in visited:
                    dfs_helper(neighbor)
        
        dfs_helper(start)
        return result
    
    def breadth_first_search(self, start):
        result = []
        visited = set()
        queue = deque([start])
        visited.add(start)
        
        while queue:
            current_vertex = queue.popleft()
            result.append(current_vertex)
            
            for neighbor in self.adjacency_list[current_vertex]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        
        return result
    
    def is_empty(self):
        return len(self.adjacency_list) == 0
    
    def size(self):
        return len(self.adjacency_list)
    
    def get_vertices(self):
        return list(self.adjacency_list.keys())
    
    def get_neighbors(self, vertex):
        return self.adjacency_list.get(vertex, []).copy()
    
    def has_vertex(self, vertex):
        return vertex in self.adjacency_list
    
    def has_edge(self, vertex1, vertex2):
        return (vertex1 in self.adjacency_list and 
                vertex2 in self.adjacency_list[vertex1])
    
    def clear(self):
        self.adjacency_list.clear()
    
    def display(self):
        print(f"Graph: {dict(self.adjacency_list)}") 