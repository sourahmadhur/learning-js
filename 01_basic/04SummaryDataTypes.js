//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // js me number k ander hi floats value aajata haai 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //array

let myObj = { //obj
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ //fnc
    console.log("Hello world");
}
console.log(myFunction()); 
 

console.log(typeof anotherId); // change it to see each data types

// https://262.ecma-international.org/5.1/#sec-11.4.3





// there are two type of memory , stack memory and heap memory 
// stack memory is used for primitive data types and heap memory is used for reference data types (non premitive data types)

// example of stack nmemory
let bro1  =  "sushank "
let bro2 = bro1 
bro2 = "sahil"

console.log("value of bro1:", bro1);
console.log("value of bro2:", bro2);
// yahan pe bro1 ki value change nahi hui kyuki bro1 aur bro2 dono alag alag memory location pe store hue the , aisa bol sakte hai ki bro1 aur bro2 dono alag alag copy hai , dono ke alag alag memory location hai

// example of heap memory
let obj1 = {
    name: "sushank",
    age: 22,
}
console.log("value of obj1 before assiging other value to obj2 ", obj1);


let obj2 = obj1
console.log("value of obj2  before assiging other value to obj2 " , obj1);
obj2.name = "sahil"
console.log(" updated value of obj1:", obj1);
console.log("updatede value of obj2:", obj2);
// yahan pe dono ki value change hui kyuki dono same memory location pe store hue the , aisa bol sakte hai ki dono same copy hai , dono ke same memory location hai , isi liye dono ki value change hui
