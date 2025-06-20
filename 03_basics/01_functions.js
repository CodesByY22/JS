function sayMyName(){
    console.log("y");
    console.log("a");
    console.log("s");
    console.log("h");
}

// sayMyName()
// function addTwoNumbers(a,b){ //a b are parameters
//     console.log(a + b);
// }

// // addTwoNumbers(2,"3"); (2 is argumeent)

// const result = addTwoNumbers(2,3)

function loginUserMessage(username = "guest"){

    if(!username){
      console.log("enter the username");
      return
    }
    return `Welcome ${username} to the website` 
    console.log("this will not run")
}

// console.log(loginUserMessage());



function calculateCartPrice(val1,val2,...num1){ // here ... is rest operator 
    return num1

}

// console.log(calculateCartPrice(100,200,112,211));


const user = {
    username : "yash",
    price : 199,

}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)

}

// handleObj(user);

handleObj({
    username : "sam",
    price : 99,

})

const myNewArr = [200,400,100,600]

function returnSecval(getArr){
    return getArr[1]


}

// console.log(returnSecval(myNewArr));
console.log(returnSecval([211,11,2442,244]));


