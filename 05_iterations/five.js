const arr = ["y","a","s","h"]

// function () this is call back funtion

// arr.forEach(function (val){
//     console.log(val);
    
// })


// arr.forEach( (val) => {
//     console.log(val);
    
// })


// function printMe(item){
//     console.log(item);
    
// }

// arr.forEach(printMe)


// arr.forEach((item,index,arr) => {
//     console.log(item,index,arr);
    

// })


const myCoding = [
    {
        languageName : "javascript",
        languageFilename : "js"
        
    },
    {
        languageName : "computer pragramming",
        languageFilename : "cp"

    },
    {
        languageName : "c++",
        languageFilename : "cpp"

    }
]

const values = myCoding.forEach((item) => {
    // console.log(item.languageFilename);
    // console.log(item);
    return item
    

})

//forEach wont return value

// console.log(values)


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//     return num  > 4})
// console.log(newNums)

const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})

// console.log(newNums);
