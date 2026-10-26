// immediately invoked function expression (IIFE)

// IIFE used when you need to execute any function directly after defining 
// it helps to reduce global scope noise 

// syntax : ()();


// iiss iife ko named iife bolte hain kyuki isme function ka name defined hai 
(function nothing(){
    console.log("nothing")
}) ();



// iss iife ko simple iife (ya unamed iife )bolte hain isme name nahi hota hai 
  (() => {
    console.log(`hello `);
}) ();


// agr iife banane k baad usme koi value pass krna ho to : 
 ((nameOFaccholder) => {
    console.log(`hello mr ${nameOFaccholder}`);
}) ("sourabh");


(function shout(loudely) {
    console.log(loudely);

})("shouting loudely");