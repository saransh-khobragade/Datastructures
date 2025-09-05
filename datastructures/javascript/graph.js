// Graph implementation in JavaScript
// Supports addVertex, addEdge, removeEdge, removeVertex, depthFirstSearch, breadthFirstSearch, and utility methods

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                v => v !== vertex2
            );
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                v => v !== vertex1
            );
        }
    }

    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            while (this.adjacencyList[vertex].length) {
                const adjacentVertex = this.adjacencyList[vertex].pop();
                this.removeEdge(vertex, adjacentVertex);
            }
            delete this.adjacencyList[vertex];
        }
    }

    depthFirstSearch(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function dfs(vertex) {
            if (!vertex || visited[vertex]) return;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        }

        dfs(start);
        return result;
    }

    breadthFirstSearch(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            const currentVertex = queue.shift();
            result.push(currentVertex);
            
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

    // Check if graph is empty
    isEmpty() {
        return Object.keys(this.adjacencyList).length === 0;
    }

    // Get number of vertices
    size() {
        return Object.keys(this.adjacencyList).length;
    }

    // Get all vertices
    getVertices() {
        return Object.keys(this.adjacencyList);
    }

    // Get neighbors of a vertex
    getNeighbors(vertex) {
        return this.adjacencyList[vertex] || [];
    }

    // Check if vertex exists
    hasVertex(vertex) {
        return vertex in this.adjacencyList;
    }

    // Check if edge exists
    hasEdge(vertex1, vertex2) {
        return this.adjacencyList[vertex1] && 
               this.adjacencyList[vertex1].includes(vertex2);
    }

    // Clear the graph
    clear() {
        this.adjacencyList = {};
    }

    // Display graph
    display() {
        console.log("Graph:", this.adjacencyList);
    }
}

module.exports = { Graph }; 