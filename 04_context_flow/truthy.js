const userEmail ="y@gmail.com"

if(userEmail) {
  console.log("User email is set");
}
else {
  console.log("User email is not set");
}


//falsy values

// false , 0 -0, "", null, undefined, NaN
// truthy values - all other values except falsy values

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//  false == 0  // true
// false == "" // true
// 0 == "" // true

// Nullish coalescing operator ?? ; null or undefined
let val1 ;
val1 =  5 ?? 10

val1 = null ?? 10

val1 = undefined ?? 10
// val1 = 0 ?? 10       // 0 output



// console.log(val1)

// Ternary operator ++++++++++++++++++++++++++++++++++++++
condition ? true : false

