// const score = 100;

// const balance = new Number(200);
// console.log(balance); // Outputs: [Number: 1000]
// console.log(score);

// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toFixed(2));


// const otherNumber = 100.923456789;
// console.log(otherNumber.toPrecision(3)); // Outputs: '100.12', rounding to 5 significant digits

// const hundreds = 100000000
// console.log(hundreds.toLocaleString()); // Outputs: '10,000' in US locale format


//++++++++++++++++++++++++  Maths+++++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-10)); // Outputs: 10, absolute value
// console.log(Math.ceil(4.1)); // Outputs: 5, rounds up to nearest integer
// console.log(Math.round(4.7)); // Outputs: 5, rounds to nearest integer
// console.log(Math.floor(4.9)); // Outputs: 4, rounds down to nearest integer
// console.log(Math.max(1, 2, 3, 4, 5)); // Outputs: 5, maximum value

console.log(Math.random()); // Outputs a random number between 0 and 1
console.log((Math.random()*10) + 1); // Outputs a random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Outputs a random integer between 1 and 10


const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // Generates a random number between min and max (inclusive)

