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
// const obj3 = Object.assign(obj1,obj2) // this will merge obj1 and obj2 into obj1
// console.log(obj3);


// const  obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id : 1,
        emial: "y22@.com",  
    },
    {
        id : 1,
        emial: "y22@.com",  
    },
    {
        id : 1,
        emial: "y22@.com",  
    },
]

// users[1].email 
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = { 
    courseName : "javascript",
    price : 999,    
    courseInstructor : "yash",

}

// course.courseInstructor

const {courseInstructor} = course; // destructuring
console.log(courseInstructor);


const {courseInstructor : i} = course; // destructuring
console.log(i);

// {
//     "name" :"yash",
//     "coursename" : "javascript",
//     "price" : 999,
// }

[
    {},
    {},
    {}
]

