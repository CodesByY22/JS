// Immediately Invoked Function Expression (IIFE) 

(function chai(){
    console.log("This is an IIFE function");


}) ();  //here is ; this is very imp without this further function will not work

// ()()
// (whole fun)()
 // global scope is not polluted by IIFE thats why we used this iife

( () => {
    console.log("i am inside the arrow function")
} ) () // error if upper fun has no semicolom

