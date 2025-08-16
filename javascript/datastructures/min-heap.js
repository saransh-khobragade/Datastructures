// Simple Min Heap implementation in JavaScript
// Basic heap operations: insert, extractMin, peek, isEmpty, size, clear, and toArray methods

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Insert new element
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    // Move element up to maintain heap property
    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (element >= parent) break;

            // Swap with parent
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    // Remove and return minimum element
    extractMin() {
        if (this.isEmpty()) {
            return null;
        }

        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }

        return min;
    }

    // Move element down to maintain heap property
    bubbleDown() {
        let index = 0;
        const element = this.heap[0];

        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let smallest = index;

            // Find smallest child
            if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallest]) {
                smallest = leftIndex;
            }
            if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallest]) {
                smallest = rightIndex;
            }

            if (smallest === index) break;

            // Swap with smallest child
            this.heap[index] = this.heap[smallest];
            this.heap[smallest] = element;
            index = smallest;
        }
    }

    // Get minimum element without removing
    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    // Check if heap is empty
    isEmpty() {
        return this.heap.length === 0;
    }

    // Get heap size
    size() {
        return this.heap.length;
    }

    // Clear the heap
    clear() {
        this.heap = [];
    }

    // Convert heap to array
    toArray() {
        return [...this.heap];
    }

    // Display heap
    display() {
        console.log("Heap:", this.heap);
    }
}

module.exports = { MinHeap }; 