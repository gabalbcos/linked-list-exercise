// Array
let array = ["banana", {list: ['apple', 'lemon', 'orange']}];
let copyArray = Array.from(array);
console.log(copyArray)
copyArray[0] = "diferent";
console.log(array)
copyArray[1].list = ["goose feet", "pineapple"]
console.log(copyArray)
console.log(array)
let number = 1052;
let checkFor5 = number.toString()
console.log(checkFor5.includes(5))

/*// Stack
// First create Node Class for each node in the stack
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// Create a class for the stack
class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    // Push method
    push(val) {
        // Create new node using the class
        var newNode = new Node(val)
        // Check if there is a head node
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
        // Var to save the previous item    
            var temp = this.first;
        // Put the node at the top of the stack    
            this.first = newNode
        // Add the path to the previous node    
            this.first.next = temp 
        }
        return ++this.size
    }
    // Pop method
    pop(val) {
        // if the stack is empty, return null
        if(!this.first) return null

        var temp = this.first

        // if there is only one item on the stack, empty the previous
        if (this.first === this.last) {
            this.last = null
        }
        // make the first item become the next (previous)
        this.first = this.first.next
        // reduce the stack size by one
        this.size--
        return temp.value

        }
}

// Creating a new stack
const stack1 = new Stack;

// adding items
stack1.push('value1')
stack1.push('value2')
stack1.push('value3')


stack1.pop()
console.log(stack1.size)*/
/*
// Singly Linked List
// First create a Node class  
class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }
}

// Create class for the list
class singlyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Push method adds and assigns value to the tail
    push(val) {
        const newNode = new Node(val);
    // Check if there is a first node and create it if not    
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
    // Add the next for the last node and change it to the current node            
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this
    }
    // Pop removes the tail
    pop(){
    // Check if the list is not empty    
        if(!this.head) return undefined;
    // Set starting variables to iterate until the last list item    
        const currentNode = this.head;
        const newTail = this.head;
    // Iterate to find the second to last node
        while (current.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
    // Set the tail to the second to last value (newTail)    
        this.tail = newTail;
    // Erase the next value    
        this.tail.next = null;
    // Subtract 1 from the length of th list    
        this.length -= 1;
    // If the length becomes 0, empty all values    
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length -= 1;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
            newNode.next = currentHead;
            this.head = newNode;
            this.length += 1;
            return this
    }
    get(index){
        if(index < 0 || index > this.length) return null;
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter += 1;
        }
        return currentNode
    }
    set(index,val){
        const foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    // Insert method takes an index number and adds the new value there
    insert(index, val){
        // First index validation and return true or false
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val)

        // Add value between two nodes
        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const temp = this.get(index);
        prev.next = newNode;
        newNode.next = temp;
        this.length += 1;
        return true;
    }
    // Remove gets an index as a parameter and removes it
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        const previousNode = this.get(index - 1);
        const removed = previousNode.next;
        previousNode.next = removed.next;
        this.length -= 1;
        return removed;
    }
    // Reverse all pointers so the head becomes the tail
    reverse(){
        const node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        const prev = null;
        // Iterate through all the nodes changing the next to previous
        for(let i = 0; i < this.length; i +=1){
            next = node.next;
            node.next = prev;
            node = next;
        }
        return this;
    }
} 
*/
/*
// Doubly linked list
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;       
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size += 1;
        return this;
    }
    pop(){
        // If the list is empty
        if(!this.head) return undefined
        const poppedNode = this.tail;
        // If there is only a head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.size -= 1;
        return poppedNode;
    }
    // Shift to remove the head of the list
    shift(){
        if(this.size === 0) return undefined;
        const oldHead = this.head;
        if(this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.size -= 1;
        return oldHead
    }
    unshift(val){
        const newNode = new Node(val);
        if(this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }
    // Get method takes an index number as parameter and returns the value
    get(index){
        if(index < 0 || index > this.size) return null;
    // Initiate counter and current variables
        let current, count;
    // Check if the search starts from the tail or from the head    
    // If the index is smaller than half of the size then start from head    
        if(index <= this.size/2){
            count = 0;
            current = this.head
            while(count !== index){
                current = current.next;
                count += 1;
            }
        } else {
            count = this.length-1;
            current = this.tail;
            while(count !== index) {
                current = current.prev;
                count -= 1;
            }
        }
        return current;
    }
    // Set method takes an index number and values as parameters and modifies the node at the index with the value
    set(index, value){
        // find the node by using the get method
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    // Insert method takes an index and value, and add the newnode at that index
    insert(index, val) {
        // Node outside the list INVALID
        if(index < 0 || index > this.length) return false;
        // Add node to the start of the list
        if(index === 0) return !!this.unshift(val);
        // Add node to the tail of the list
        if(index === this.length) return !!this.push(val);
        // Get the node before the index
        var newNode = new Node(val);
        var beforeNode = this.get(index -1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;;
        this.size += 1;
        return true;
    }
}*/
// Binary Search Tree
// Node Class
class Node {
    constructor(val){
        this.val = val;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}
// BST class
class BinarySearchTree {
    // Only has one property the root node
    constructor(){
        this.root = null;
    }
    // Insert Method take a value as a parameter and insert it in the tree
    insert(val){
        const newNode = new Node(val);
        // Check if there is a root and add the value as the root if not
        if(!this.root){
            this.root = newNode;
            return this;
        }
        // Begin search for the nodes
        let current = this.root;
        while(true){
            // Check if the value is already in the tree
            if(val === current.val) return undefined;
            // Check if the value is smaller than the node
            if(val < current.val){
                // Check if there is a node to the left
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                // Go to the left node
                current = current.left;
            } else {
                // Check for the right side
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right
            }
        }
    }
    // Find method takes a value as a parameter and iterates through the tree
    // If the value is found it returns the corresponding node and if not it returns undefined
    find(val){
        // Check if there is a root
        if(this.root === null) return false;
        let current = this.root,
        found = false;
        // When the tree ends current will be null and if it's found !found will return false
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if (val > current.val){
                current = current.right;
            } else {
                found = true;
            }
        }
        // If there is no value found current will become null and execute the last bit
        if(!found) return undefined;
        return current;
    } 
    // Contains methods takes a value as a parameter and returns true if it's found or false if not
    contains(val){
        // Check if there is root
        if(this.root === null) return false;
        let current = this.root,
        found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if (val > current.val){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

