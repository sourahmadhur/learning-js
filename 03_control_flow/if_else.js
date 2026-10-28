// if 

// if contdition is true then only the code inside the scope will be executed , else it will not execute
// if (condition) {
//   console.log("abc")
// }
// here in condition we can use all oprator to check our condition
// <, > ,>= , <= 
//  != (not equal to ),  !== 
// == (checks just value should be same , no matter of data type ) , === (checks strict equal to , checks data type)

// const hero = "ritik roshan"
const hero = "sourabh"

if (hero === "ritik roshan") {
    console.log(`hello mr. ${hero}`);
    
}


// if else 
// if (condition) {
    // yaa ye run hoga 
// } else {
    // ya yahan ka code run hoga 
// }
// scope k bahar se koi lena dena nnhi hai , wo execute hoga hi

let boys = 25
let girls = 26

if (boys > girls) {
    console.log("Number of boys is higher then girls");
    
} else {
    console.log("Nnumber of girls is higher then boys ");
    
}

// else if 
// isse hmlog multiple conditions check kr sakte hain 
const balance = 1000
if (balance < 250) {
    console.log("balance is less then 250");   
} else if (balance< 500) {
    console.log("balance is less then 500");
    
} else if (balance < 750) {
    console.log("balance is less then 750");
} else if (balance <= 1200) {
    console.log("balance is less then 1200");
    
} else {
    console.log("your balance is above 1200");
    
} 




// and &&
// or || 
// or , and  v hmlog if else k bich use kr sakte hain apna condition check krne me 

let userSignedIn = true
let userHasCC = true 
let userAddedProductToCart = true
let signedInByGoogle = false 
let signedInByEmail = true 

if (userSignedIn && userHasCC && userAddedProductToCart) {
    console.log("you can avail the offer ");
} else{
    console.log("our terms and condition is not satisfied , sorry you cant avail the offer");
    
}

if ((signedInByEmail || signedInByGoogle) && userAddedProductToCart) {
    console.log("you can proceed to checkout");
    
} else {
    console.log("please login and add the product to cart to proceed ");
    
}

