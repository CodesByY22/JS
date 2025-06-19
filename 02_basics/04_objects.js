// const tinderUser = new Object() // singleton
const tinderUser = {} // non-singleton


tinderUser.id = "yash123";
tinderUser.name = "heni";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regualarUser= { 
    email : "yashk03.com",
    fullname : {
        userfullname : {
            firstname : "yash",
            lastname : "kotadiya",
        }
    }
}

// console.log(regualarUser.fullname?.userfullname.firstname) // ? is for if this is here so run if not for protection from error 


const obj1 = {1 : "a", 2 : "b" }
const obj2 = {3 : "c", 4 : "d" }

// const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2) // this will merge obj1 and obj2 into obj1
console.log(obj3);


