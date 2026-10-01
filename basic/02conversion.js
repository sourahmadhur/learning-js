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
