// JavaScript Scope – Basic Notes
// 1. What is Scope in JavaScript?
// Scope defines where a variable can be accessed or used in a JavaScript program.

// There are mainly three types of scope in JavaScript:

// Global Scope

// Function Scope

// Block Scope

// 2. Global Scope
// A variable declared outside any function or block has global scope. It can be accessed from almost anywhere in the script, subject to the rules of its declaration and execution environment.

// Example:
let name = "Rahul"; // Global scope

function greet() {
    console.log(name);
}

greet(); // Rahul
console.log(name); // Rahul


// Key points:

// Variables declared outside functions and blocks can have global scope.

// Global variables can be accessed inside functions.

// let and const declared at the top level of a script are not properties of the global window object in browsers.

// Global variables should be used carefully to avoid naming conflicts.

// 3. Block Scope
// A block is a group of statements enclosed in curly braces { }, such as an if statement or a loop.

// Variables declared with let and const inside a block have block scope. They can only be accessed within that block.


{
    let age = 20;
    const city = "Patna";

    console.log(age);  // 20
    console.log(city); // Patna
}

// console.log(age); // ReferenceError
// console.log(city); // ReferenceError



// Key points:

// let and const are block-scoped.

// They cannot be accessed outside the block in which they are declared.

// Each block can have its own variables.

// var is not block-scoped.

// Example using var:
{
    var x = 10;
    let y = 20;
}

console.log(x); // 10
// console.log(y); // ReferenceError





// nested scope (scope k andr scope)

function one(){
    myname= "sourabh"

    function two(){
        console.log(myname)
       const bro = "hero"
    }
    two()
   // console.log(bro);
    
}
one()

// humara scope apne scope k bahar k values ko acess kr pata hai , per scope ka value scope k bahar use nhi ho pata hai 




