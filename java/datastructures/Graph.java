// Graph implementation in Java
// Supports addVertex, addEdge, removeEdge, removeVertex, depthFirstSearch, breadthFirstSearch, and utility methods

import java.util.*;

public class Graph {
    private Map<String, List<String>> adjacencyList;

    public Graph() {
        this.adjacencyList = new HashMap<>();
    }

    public void addVertex(String vertex) {
        if (!adjacencyList.containsKey(vertex)) {
            adjacencyList.put(vertex, new ArrayList<>());
        }
    }

    public void addEdge(String vertex1, String vertex2) {
        if (!adjacencyList.containsKey(vertex1)) {
            addVertex(vertex1);
        }
        if (!adjacencyList.containsKey(vertex2)) {
            addVertex(vertex2);
        }
        adjacencyList.get(vertex1).add(vertex2);
        adjacencyList.get(vertex2).add(vertex1);
    }

    public void removeEdge(String vertex1, String vertex2) {
        if (adjacencyList.containsKey(vertex1)) {
            adjacencyList.get(vertex1).remove(vertex2);
        }
        if (adjacencyList.containsKey(vertex2)) {
            adjacencyList.get(vertex2).remove(vertex1);
        }
    }

    public void removeVertex(String vertex) {
        if (adjacencyList.containsKey(vertex)) {
            while (adjacencyList.get(vertex).size() > 0) {
                String adjacentVertex = adjacencyList.get(vertex).remove(0);
                removeEdge(vertex, adjacentVertex);
            }
            adjacencyList.remove(vertex);
        }
    }

    public List<String> depthFirstSearch(String start) {
        List<String> result = new ArrayList<>();
        Set<String> visited = new HashSet<>();
        dfsHelper(start, visited, result);
        return result;
    }

    private void dfsHelper(String vertex, Set<String> visited, List<String> result) {
        if (vertex == null || visited.contains(vertex)) return;
        
        visited.add(vertex);
        result.add(vertex);
        
        for (String neighbor : adjacencyList.get(vertex)) {
            if (!visited.contains(neighbor)) {
                dfsHelper(neighbor, visited, result);
            }
        }
    }

    public List<String> breadthFirstSearch(String start) {
        List<String> result = new ArrayList<>();
        Set<String> visited = new HashSet<>();
        Queue<String> queue = new LinkedList<>();
        
        visited.add(start);
        queue.add(start);
        
        while (!queue.isEmpty()) {
            String currentVertex = queue.poll();
            result.add(currentVertex);
            
            for (String neighbor : adjacencyList.get(currentVertex)) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.add(neighbor);
                }
            }
        }
        return result;
    }

    public boolean isEmpty() {
        return adjacencyList.isEmpty();
    }

    public int size() {
        return adjacencyList.size();
    }

    public Set<String> getVertices() {
        return new HashSet<>(adjacencyList.keySet());
    }

    public List<String> getNeighbors(String vertex) {
        return adjacencyList.containsKey(vertex) ? 
               new ArrayList<>(adjacencyList.get(vertex)) : 
               new ArrayList<>();
    }

    public boolean hasVertex(String vertex) {
        return adjacencyList.containsKey(vertex);
    }

    public boolean hasEdge(String vertex1, String vertex2) {
        return adjacencyList.containsKey(vertex1) && 
               adjacencyList.get(vertex1).contains(vertex2);
    }

    public void clear() {
        adjacencyList.clear();
    }

    public void display() {
        System.out.println("Graph: " + adjacencyList);
    }
} 