const name = "yash"
const repocount = 22

console.log(`My name is ${name} and I have ${repocount} repositories.`); // Template literals for string interpolation

const gameName = new String("chess-yash");  // Creating a string object
// console.log(gameName); // Outputs: [String: 'chess']
// console.log(typeof gameName); // Outputs: object, because it's a String object, not a primitive string

// console.log(gameName[0]);
// console.log(gameName.__proto__); // Outputs: String.prototype, showing that gameName is an instance of String


console.log(gameName.charAt(2));
console.log(gameName.indexOf("s"));

const newString = gameName.substring(0,4);
console.log(newString); // Outputs: 'ches'

const newString2 = gameName.slice(0,4);
console.log(newString2); // Outputs: 'ches'

//slice includes negative indices

console.log(newString.trim()); 

const url = "https://www.youtube.com/%20@yash22";

url.replace("%20","-")
console.log(url.replace("%20","-"));

console.log(url.includes("youtube"));

console.log(url.split("/")); // Splits the string into an array at each "/"




