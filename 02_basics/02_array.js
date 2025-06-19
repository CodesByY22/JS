const marvel = ["IRONMAN","SPIDERMAN"]

// marvel.push("HULK","THOR");

// console.log(marvel); // Output: ["IRONMAN", "SPIDERMAN", "HULK", "THOR"]

// const dc = ["BATMAN","SUPERMAN"];

// const all = marvel.concat(dc);
// console.log(all); // Output: ["IRONMAN", "SPIDERMAN", "HULK", "THOR", "BATMAN", "SUPERMAN"]

// const all_new_heros = [...marvel,...dc] //spread oparator
// console.log(all_new_heros);

// const another_arr = [1,2,3,[34,554,332],[43,58,[5,43,2]]]

// const real_Arr = another_arr.flat(Infinity)

// console.log(real_Arr); // Output: [1, 2, 3,



console.log(Array.isArray("yash")); // Output: false
console.log(Array.from("yash")); // Output: ["y", "a", "s", "h"]
console.log(Array.from({name : "yash"})); //empty array

let score1 =100
let score2=200
let score3 =300

console.log(Array.of(score1,score2,score3)); // Output: [100, 200, 300]
