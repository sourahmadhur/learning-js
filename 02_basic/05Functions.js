// function syntax

function sayMyName (){
 console.log("S");
  console.log("O");
   console.log("U");
    console.log("R");
     console.log("A");
      console.log("B");
       console.log("H");
 
}
// recalling the function
sayMyName()
                // issko (parameters) bolte h 
function addTwoNum(num1 , num2) {
    console.log(num1+num2);
    

}
// isko (arguements) bolte hai
addTwoNum(1 , 4)
// is case me aggr hmlog ak v input me data type change krenge , toh desired output nhi milega 
// abhi logical operators or conditions yesab touch nhi hua nhi to yahan pe condition lagga k iss situatiion ko handel kr sakte th 


//example of a function. which can multiple two number and give output
function MultiTwoNum(numb1 , numb2) {
let result = numb1 * numb2 
return result
// kahain v return likh denege agr function k andr to uske niche ka code run nhi hogga
// kuch v code agr return k upr h tabhi wo run krke output dega 
}

let result = MultiTwoNum(3,5)
console.log( "result :", result)


// another way of writing this same type of function
function divi(nu1 , nu2){
    return nu1 / nu2
}

let answer = divi(20 , 4)
console.log("answer: ", answer);


// logged in check krne wala function 
function isLoggedIn(username){
    // if (username === undefined){
       if (!username){
        console.log("please enter username")
        return
    }
 return `hello ${username} , wellcome to the platform`
}

//console.log(isLoggedIn("")); // inputs ko change kr sakte hai , 
console.log(isLoggedIn());
// console.log(isLoggedIn("sourabh"));


// avi tak humlog aisa function banaye jisme hmloog input 2 hi diye , lakin ab agr hmlog ko agr multiple value kisi function me input krwana ho to hmlog rest operator use krnge 
// reset operator bhut jada use hota h , jaise cart me jitne item add hue usko add krna ho etc , ye spread operator jaisa hi dikhta hai 
// rest or spreader operator apne. use case k according kaam krta hai
function cartpriceadd(...num1){
    return num1

}
console.log(cartpriceadd(27 , 55 , 11 , 44, 920))
// ab aise krne pe humara function sara inputs ko array k form me output de rhha , isko aram se hmlog add kr sakte hain 

// passing object into function
// yaha humne ak sample obj banaya
const user ={
    username : "sourabh",
    age : 21
}

// uss obj ko humne yaha function k andr pass kiya 
function recall(anyUser){
    console.log(`hello! ${anyUser.username} , your age is ${anyUser.age}`)

}
recall(user)

// passing array into function 
const users = ["sourBH" , "sonu " , "monu" , "pnkj"]

function returnArrElement(anyusers){
    return anyusers[2]
}
console.log(returnArrElement(users))





