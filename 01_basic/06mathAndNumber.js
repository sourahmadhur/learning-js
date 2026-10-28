let myBcount = 2 // normal way to define number , isme js automatic detect krta hai ki wo number hai 

let myRcount = new Number(3) // agr hmko sprecifically dikhana hai ki wo number hi hai to humlog ye syntax use krenge
console.log(myRcount);

console.log(typeof(myRcount))

let stringMyRcount = myRcount.toString()
console.log("type of stringMyRcount: " , typeof(stringMyRcount)); // string

console.log(myBcount.toFixed(2)) // 2.00 //ye usefull hota hai jahan tmko decimal me kaam krna hai ,  ex ecommers me price cALCULATION ME 

let sahilDogla= 98.92
console.log(a=sahilDogla.toPrecision(2)) // 99 , () me 2 hai mtlb round off 2 digit me hoga
// precision me round off hota hai per ye kabhi kabhi dikkt krta hai 
// sath me to precision ak string output deta hai


let cost = 99999999
console.log(cost.toLocaleString()) // ye humlog ko us standerd me numbers dikhata hai 
console.log(cost.toLocaleString('en-IN')); // aisa krne pe ye indian std me number show krega


// ++++++++++++++. Math. +++++++++++++++++++++++++++
//math ak inbuild library hai js ka jo humlog ko kuch kuch operation me help krta hai 



console.log(Math.abs(-1000)); // abs negative value ko positive me badalne ka kaam krta hai

console.log(Math.round(533.98)); // round off krta h

console.log(Math.ceil(77.122)); // 78 upper value me round off krega 

console.log(Math.floor(898.992)); //898 lower value me round off krega 

console.log(Math.min(2,4,1,4,7,3,1)); // lowest finder in js

console.log(Math.max(96,334, 7778, 80, -8)); // higest finder


// RANDOM 
console.log(Math.random()); // returns number between 0 to 1 
console.log(Math.random()*100); //returns value between 0-100
console.log(Math.floor((Math.random()*100)+1)); //returns value between 1-100



//to get any number bewtwwn any range 
const min = 5
const max = 9

console.log(Math.floor(Math.random()* (max-min+1))+min);









