export class Node {
    constructor(value) {
        this.value = null
        this.next = null
    }
}

export class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
        this.array = [];
    }
    append(value) {
        let node = new Node(value);
        if (node.value === null) {
            node.value = value;
        }
        if (this.head === null) this.head = node;
        else{
            let current = this.head
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.array.push(node);
        this.length++
    }
    prepend(value) {
        let node = new Node(value);
        if (node.value === null) node.value = value;
        if (this.head === null) this.head = node;
        else {
            node.next = this.head;
            this.head = node;
        }
        this.array.unshift(node);
        this.length++
    }
    size() {
        return this.array.length;
    }
    getHead() {
        // returns first node of the list.
        return this.head;
    }
    tail() {
        if (this.head === null) return null;
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }
    at(index) {
        if (this.head === null) return 'List is empty';
        let arr = this.array;
        if (index < 0 || index >= arr.length) return 'Index is out of range';
        else {
            let node = arr[index];
            return node;
        }
    }
    pop() {
        if (this.head === null) return 'List is empty';
        if (!this.head.next) { // If there's only one node
            this.head = null;
            this.array.pop();
            this.length--;
            return;
        }
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        current.next = null;
        this.array.pop();
        this.length--;
    }
    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }
    find(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return this.array.findIndex(elem => elem.value === value);
            } 
            current = current.next;
        }
        return null;
    }
    toString() {
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += `( ${current.value} ) -> `;
            current = current.next;
        }
        result += "null";
        return result;
    }
    insertAt(value, index) {
        if (index < 0 || index > this.length) return null;

        let node = new Node(value);
        if (node.value === null) node.value = value;
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let prev = null;
            let count = 0;
            while (count < index) {
                prev = current;
                current = current.next;
                count++;
            }
            prev.next = node;
            node.next = current;
        }
        this.array.splice(index, 0, node);
        this.length++
    }
    removeAt(index) {
        if (index < 0 || index > this.length) return null;
        if (this.head === null) return null;
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let prev = null;
            let counter = 0;
            while (counter < index) {
                prev = current;
                current = current.next;
                counter++;
            }
            prev.next = current.next;
        }
        this.array.splice(index, 1);
        this.length--;
    }
}


