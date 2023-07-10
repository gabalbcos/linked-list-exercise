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
} 