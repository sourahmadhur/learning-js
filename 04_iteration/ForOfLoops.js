

// for of loop
// yaha initialize ya increment decrement nhi krna padta hai 
// let (const iterator of object ) iterator bs ak naam hai jo humara value ko store krta hai, object yaha pe kuch v ho sakta hai 
let arr = [1,2,3,4,5,6]
for (const value of arr) {
   // console.log(value);
}

const greeting = "hello world!"
for (const greet of greeting) {
    // if (greet == " ") {
    //     break;
    //     continue;
    // }
   // console.log(greet);
}

// map : ak alag data type hai , jo bus unique values store krta hai 
// agr value repeat hogi to map usko ignore kr dega 
// jiss order me data denge ussi order me ye kaam krega 
let map = new Map()
map.set("uk" , "united kingdom")
map.set("in" , "india")
map.set("pk" , "pakistan")
map.set("uk" , "united kingdom")

 //console.log(map);
for (const [key , value] of map) {
  //  console.log(key , ":-" , value );
    
}





 