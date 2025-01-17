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
        this.length++
    }
    size() {
        return this.length;
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
}

let list = new LinkedList();
list.prepend(9)
list.append(5)
list.prepend(6)
list.append(10)
list.append(12)
list.append(17)
list.append(39)


console.log(list)
console.log("Size: ", list.size())
console.log("Head: ", list.getHead())
console.log("Tail: ", list.tail())
