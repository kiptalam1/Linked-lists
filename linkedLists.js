class Node {
    constructor(value) {
        this.value = null
        this.next = null
    }
}

class LinkedList {
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
        if (index < 0 || index > arr.length) return 'Index is out of range';
        else {
            let node = arr[index];
            return node;
        }
    }
    pop() {
        if (this.head === null) return 'List is empty';
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
}

let list = new LinkedList();
list.prepend(9)
list.append(5)
list.prepend(6)
list.append(10)
list.append(12)
list.append(17)
list.append(39)
list.prepend(1)
//list.pop();



console.log(list)
console.log("Size: ", list.size())
//console.log("Head: ", list.getHead())
//console.log("Tail: ", list.tail())
//console.log("At: ", list.at(0))
console.log(list.contains(6))