
// object consist of two things , key and value 
// let obj ={ key : value }

// object litrals 

const sym = Symbol("key01") // premetive data type me symbol nam ka chiz hota hai , wahi yahan pe declare hua h

const aboutme = {
    Myname : "sourabh" ,
    "full name" : "sourabh kumar madhur" , 
    [sym] : "power" , 
    age : 21 , 
    email : "sourabh@google.com" , 
    location : "ranchi", 
    isLogedIn : false ,
    lastWeakLogins : ["monday" , "tuesday" , "wednsday"]

} 
 // recalling elements of object
console.log(aboutme.lastWeakLogins);

// better way to recall elements of obj
console.log(aboutme["full name"]);
console.log(aboutme["isLogedIn"]);

console.log(aboutme[sym]) // ye tRIKLA HAI  symbols recall krne ka kisi object k andr

// updating values of obj

aboutme.lastWeakLogins = ["monday" , "tuesday" , "wednsday" , "friday" ]
console.log(aboutme);
 Object.freeze(aboutme)

aboutme.lastWeakLogins = ["monday" , "tuesday" , "wednsday" , "friday" , "saturday" ] // ye daal dene se humara object ka element update nhi hoga 
// bhalle isse update krne pee error nahi arrrha lakin isse update nhi hoga humara element



// NICHE K CODE KO ENABLE KROGE TOH OBJECT.FREEZE WALA COMMAND OFF KRNA
// aboutme.greeting = function(){
//     console.log(`hello i m sourabh , my age is ${this.age}` );
// }

// console.log(aboutme.greeting());


