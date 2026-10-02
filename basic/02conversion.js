let result= 59; 

console.log(typeof (result ))

let result1 = "59" // this is string value 
console.log(typeof result1) 
let newResult1 = Number (result1) // converting string into number 
console.log("newResult " + newResult1)
console.log("type of newresult is  " + typeof newResult1)


console.log("string and number force conversion to number")
let result2 = "59abc"  // this is string value 
let newResult2 = Number (result2)
console.log(typeof result2 )
console.log(" type of newResult2 is  " + typeof newResult2)
console.log(newResult2) // 


// conversio n of anything inrto boolen 
console.log("this is conversion of anything to boolen")
let IsLogedIn = 1 ; 
let newIsLogedIn = Boolean (IsLogedIn)
console.log("typeof newIsLogedIn is  "+ newIsLogedIn)
console.log(typeof newIsLogedIn)

// here we get emty string = false , string = true , 1= true , 0 = false
// any other number = false


// conversion of number into string 
let someNum = 66
let newSomeNum = String (someNum)
console.log(newSomeNum)
console.log(typeof newSomeNum)

console.log("operations starting from here ")

let value = 55; 
let negValue = -value 
console.log(negValue)
console.log(4*3)
console.log(4-3)
console.log(4/3) 
console.log(4%3) // modulo == used to check reminder
console.log(4**3) // power 4 to the poer 3 , 4*4*4


let str1 = "hello "
let str2 = "jiii"
let str3 = str1 + str2
console.log(str3)

console.log("1" + "2")
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 3) // agr pahle string hai to pura chiz ko string mana jayega 
console.log(1 + 2 + "3") // jaise yahan pahle number tha to addition hua per fir string aya to usko as a string hi treat kiya gya 
// yesab kuch js k doccument rules me hi hai 



// increment and decrement
let live = 33
 ++live; 
console.log(live)

let live1 = 77
live1++;
console.log(live1)


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



