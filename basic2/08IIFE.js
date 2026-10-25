// immediately invoked function expression (IIFE)

// IIFE used when you need to execute any function directly after defining 
// it helps to reduce global scope noise 

// syntax : ()();

(function nothing(){
    console.log("nothing")
}) ();


  (() => {
    console.log(`hello `);
}) ();


 ((nameOFaccholder) => {
    console.log(`hello mr ${nameOFaccholder}`);
}) ("sourabh");