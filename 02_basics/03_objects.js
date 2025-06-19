// singleton 
//Object.create({})

// objects literals


const mySym = Symbol("key1");

const JsUser = {
    name : "yash", // "name" : "yash"  both are same
    age : 22,
    "full name" : "yash k", // now you cannot access this by dot notation
    location : "India",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
    [mySym] : "yash"


}

// console.log(JsUser.age);
// console.log(JsUser["age"]);
// console.log(JsUser[mySym]); // datatype of mySym is string in this case


// JsUser.age = 12;
// Object.freeze(JsUser); // this will not allow any changes to the object
// JsUser.age = 100; // this will not change the age
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("heyyy JS user");
    
}



JsUser.greetingTwo = function(){
    console.log(`heyyy JS user,${this.name}`);
    
}

console.log(JsUser.greeting); // undefined
console.log(JsUser.greeting());  
console.log(JsUser.greetingTwo());  






