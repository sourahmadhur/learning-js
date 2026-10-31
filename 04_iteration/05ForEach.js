// for each , it is array specific loop 
let roommates = ["sushank", "sourabh", "deepak", "anish"]

// function use krte h humlog for each k andr , bus function ko naam nhi dete hai 
// roommates.forEach(function (item) {
//     console.log(item);
// })

// arrow function use kiya hai humne yaha
// for each k andr bhut sara value aata hai jaise array purra , index , item , etc
roommates.forEach( (item , index , arr)=> {
   // console.log(item , index , arr);
} )
 


// IMPORTANT ABSTRACTING OBJECT VALUES IF THE OBJECT IS INSIDE ARRAY 
let myCoadings =[
    {
        'language' : "javascript" , 
        'fileType' : "js"
    } ,
    {
        'language' : "python" , 
        'fileType' : "py"
    } ,
    {
        'language' : "c++" , 
        'fileType' : "cpp"
    } ,
]

myCoadings.forEach( (item)=> {
    console.log(item.fileType);
} )

 

