const myArr = [1, 2, 3, 4, 5,"yash",true]
const myHeroes = ["Batman", "Superman"]
console.log(myArr[0])

//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

//shallow copies in simple terms means that the new array will have references to the same objects as the original array, not copies of those objects. If you modify an object in the new array, it will also affect the object in the original array.
const myHeroesCopy = myHeroes.slice(); // Creates a shallow copy of the array
// myHeroesCopy.push("Spiderman"); // Modifying the copy
// console.log(myHeroes); // Original array remains unchanged
// console.log(myHeroesCopy); // Copy with the new element

// // Array methods
// console.log(myHeroes.length); // Outputs: 2, the number of elements in the array
// console.log(myHeroes.indexOf("Batman")); 
// console.log(myHeroes.includes("Superman")); // Outputs: true, checks if "Superman" is in the array
// console.log(myHeroes.join(", ")); // Outputs: 'Batman, Superman', joins elements into a string
// console.log(myHeroes.reverse()); 
// console.log(myHeroes.sort());
// myArr.unshift("yash"); // Adds "yash" to the beginning of myArr
// console.log(myArr); 

// myArr.shift();
// console.log(myArr); // Removes the first element from myArr and logs the updated array


const arr = [1,2,3,4,5]

const a1 = arr.slice(1, 3); // Creates a new array with the first three elements

console.log(a1)
