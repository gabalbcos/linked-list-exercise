class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    } 
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size += 1;
    }
    
    // insert last node
     insertLast(data){
        let node = new Node(data); 
        let current 

    // if empty make head 
    if (!this.head) {
        this.head = node;
    } else {
        current = this.head;

        while (current.next) {
            current = current.next;
        }
        current.next = node;
        }
        this.size += 1;
    }
    // insert at index

    // get at index 

    // remove at index

    // clear list

    // print list data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

console.log(ll)

ll.insertLast(400)
ll.insertFirst(100)
ll.insertFirst(150)
ll.printListData()