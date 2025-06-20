const user = {
    username : "y22",
    price : 299,

    welcomeMessage : function(){
        console.log(`Welcome ${this.username} to the website`)

        console.log(this)
    }

    

    //this means current contest in scope you can access 
}

// user.welcomeMessage()
// user.username = "yash"
// user.welcomeMessage()

// console.log(this) // currwent context is {} output 


// function chai(){
//     let username = "yash"
//     console.log(this.username); // this will be undefined because this is not in object context
//     console.log(this); // this will be window object in browser or global object in node
// }

// chai()


const chai1 = function(){
    let username = "yash"
    console.log(this.username); // undefined
    console.log(this) // window object will be printed
}

// chai1()



const chai = () => {
    let username = "yash"
    console.log(this.username); // undefined
    console.log(this) // {}
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2  //implicit function return


// const addTwo = (num1, num2) =>  (num1 + num2 ) 


const addTwo = (num1, num2) =>  ({usernaem : "yash"}) 


console.log(addTwo(2, 3)); // 5


const myArr = [1,2,3,4,5]

// myArr.forEach(() => {


// })

