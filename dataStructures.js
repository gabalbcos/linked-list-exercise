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

// Stack
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
console.log(stack1.size)