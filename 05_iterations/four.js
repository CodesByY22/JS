const myObj = {
    js : "javascript",
    cpp : "C++",
    rb : "Ruby"
}

for (const key in myObj) {
    // console.log(myObj[key]);
    

}


const  arr = ["y","a","s","h"]

for(const key in arr){
    console.log(arr[key]);
    
}



// ++++++++++++++++++++++++++++++++++++++++

const map = new Map()
map.set('IN',"India")
map.set('FR',"France")


for(const key in map){
    console.log(key);
}

 // this will print nothing


