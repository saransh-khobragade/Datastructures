// Linked List implementation in JavaScript
// Singly linked list with append, prepend, delete, find, reverse, and utility methods

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    
    delete(data) {
        if (!this.head) return false;
        
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }
    
    find(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    // Check if list is empty
    isEmpty() {
        return this.head === null;
    }

    // Get list size
    getSize() {
        return this.size;
    }

    // Get first element
    peek() {
        return this.head ? this.head.data : null;
    }

    // Get element at index
    getAt(index) {
        if (index < 0 || index >= this.size) return null;
        
        let current = this.head;
        let count = 0;
        
        while (count < index) {
            current = current.next;
            count++;
        }
        
        return current.data;
    }

    // Insert at specific index
    insertAt(data, index) {
        if (index < 0 || index > this.size) return false;
        
        if (index === 0) {
            this.prepend(data);
            return true;
        }
        
        const newNode = new Node(data);
        let current = this.head;
        let count = 0;
        
        while (count < index - 1) {
            current = current.next;
            count++;
        }
        
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
        return true;
    }

    // Remove at specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) return null;
        
        if (index === 0) {
            const data = this.head.data;
            this.head = this.head.next;
            this.size--;
            return data;
        }
        
        let current = this.head;
        let count = 0;
        
        while (count < index - 1) {
            current = current.next;
            count++;
        }
        
        const data = current.next.data;
        current.next = current.next.next;
        this.size--;
        return data;
    }

    // Clear the list
    clear() {
        this.head = null;
        this.size = 0;
    }

    // Convert to array
    toArray() {
        const result = [];
        let current = this.head;
        
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        
        return result;
    }

    // Display the list
    display() {
        console.log("LinkedList:", this.toArray());
    }
}

module.exports = { Node, LinkedList }; 