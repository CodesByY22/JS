// Dates

let myDate = new Date();
console.log(myDate.toString()); // Current date and time
console.log(myDate.toJSON()); // Outputs the date in JSON format
console.log(myDate.toISOString()); // Outputs the date in ISO format
console.log(typeof myDate); //Object

let myCreatedDate = new Date(2023,0,22) //month starts with 0 in js
console.log(myCreatedDate.toDateString()); // Outputs: 'Sun Jan 22 2023 ...'

  