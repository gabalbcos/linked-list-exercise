// Array
let array = ["banana", {list: ['apple', 'lemon', 'orange']}];
let copyArray = array;
console.log(copyArray)
copyArray[0] = "diferent";
console.log(array)
copyArray[1].list = ["goose feet", "pineapple"]
console.log(copyArray)
console.log(array)
