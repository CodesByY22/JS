// Primitive data types in JavaScript
// call by value
// const primitiveTypes = [
//   "string",   // Represents text data
//   "number",   // Represents numeric values
//   "boolean",  // Represents true or false values
//   "null",     // Represents the intentional absence of any object value
//   "undefined",// Represents a variable that has been declared but not assigned a value
//   "symbol",   // Represents a unique and immutable value, often used as object property keys
//   "bigint"    // Represents integers with arbitrary precision
// ];

// // Non-primitive data types in JavaScript
// // call by reference
// const nonPrimitiveTypes = [
//   "object",   // Represents a collection of key-value pairs, including arrays and functions
//   "function",
//   "Array",  // A special type of object that can be called as a function
// ];


// const id = Symbol("id"); // Example of a symbol
// const anotherId = Symbol("id"); // Another symbol with the same description
// console.log(id === anotherId); // false, symbols are unique even with the same description

//  //this is object

// let myObject = {
//     name : "yash",
//     age : 20,
//     isStudent : true,
//     hobbies : ["reading", "gaming"],
// }

// const myfunction = function(){
//     console.log("This is a function inside an object");
    
// }


// +++++++++++++++++++++++++++++++++++++++


// stack (primitive types) vs heap (non-primitive types)

let myYoutubename = "yash";
let anothername = "y22";

anothername = "chaiaurcode";
console.log(myYoutubename); // "yash"
console.log(anothername); // "chaiaurcode"
// myYoutubename is stored in the stack, and anothername is a reference to the same string in the heap.

let useOne = {
  name : "yash",
  email : "user@google.com",
    
};

let useTwo = useOne; // useTwo is a reference to the same object as useOne
useTwo.name = "y22"; // Changing useTwo also changes useOne
console.log(useOne.name); // "y22"
console.log(useTwo.name); // "y22"
// useOne is stored in the heap, and useTwo is a reference to the same object in the heap.
// If you want to create a copy of an object, you can use the spread operator or Object.assign

