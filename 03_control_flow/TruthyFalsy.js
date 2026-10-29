 const userEmail = "sourabh@any.com"
// const userEmail = ""
if (userEmail) {     // hmlog yaha pe condition ko kahin se check nahi kr rhe , fir v agr userEmail present hoga to humara if wala scope code run hoga , isi ko truthy bolte hain. bus email presentr hai isi liye humara if scope run ho jata hai
    console.log(`the email is ${userEmail}`);
}else {
    console.log("dont have email");
}

// all falsy values :
// false , 0 , -0 , BigInt , "" , null , undefined , NaN
// iske alawa sabhi ko truthy value bolte hain


// example of truthy value:
// "0" , "false" , " " , [] , {} , Function(){}, 

// for checking empty array 
const ourData = []
if (ourData.length === 0 ) {
    console.log("array is empty"); 
}

// for checking the empty object
const myData = {}
// myData.myName = "sourabh"
// myData.age = 21 
if (Object.keys(myData).length === 0) {
    console.log("the object is empty ");
    
}else {
    console.log("the object is : " , myData);
    
}


// nullish coalescing operator(??)
//  The nullish coalescing operator (??) is a logical operator in JavaScript that returns its right-hand side operand when its left-hand side operand is null or undefined. Otherwise, it returns its left-hand side operand.

//const val1 = 5 ?? 6
const val1 = null ?? 6
//const val1 = undefined ?? 6

console.log(val1);


// Ternary operator 
// syntax : condition ? true : false
let userAge = 17
userAge >= 18 ? console.log("can vote") : console.log("cannot vote");





