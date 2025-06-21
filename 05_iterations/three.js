// // for of 

// // ["","",""]
// // [{},{},{}]

// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);  
    
// }


// const greetings = "hello yash"

// for(const greet of greetings){
//     console.log(`each char is ${greet}`)
// }

// Maps++++++++++++++++++++++++++++++++++++++++++

const map = new Map()
map.set('IN',"India")
map.set('FR',"France")

console.log(map);

for(const [key,value] of map){
    // console.log(key ,":", value);
}





/// object is not iterable it will give error but map is iterable

const myObj = {
    'game1' : "gta5",
    'game2' : "nfs",
}

// for(const [key,value] of myObj){
//     console.log(key ,":", value);
// }



