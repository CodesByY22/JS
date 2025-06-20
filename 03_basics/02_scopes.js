var c = 10

if(true){
    let a = 10
    const b = 20
    var c = 30 // c = 30 same as var
}

// console.log(a);
// console.log(b);
// console.log(c); // 30


function one(){
    const username = "yash"

    function two(){
        const website = "youtube"
        console.log(username)

    }

    // console.log(website)

    two()
}


// one()

 




// +++++++++++++++++++++++++++++++++ interesting +++++++++++++++

const addTwo = function(num){
    return num +2
}

console.log(addTwo(2))




addone(one)     // true but not will happen with variable vali method 
function addone(num){
    console.log(num+1)
}

