
// singleton object
const class2 ={}

class2.totalStudents= 51
class2.boys = 25
class2.girls = 26
class2.classteacher = "sourabh"
console.log(class2);




// object k andr v hmlog object create kr sakte hain
const user ={
    username : {
        fullname: "sourabh kumar madhur" , 
        firstname: "sourabh",
        middlename : "kumar" , 
        lastName: "madhur"
    } ,
    age : 21 , 
    skills :{
        webdev :{
            frontent : "html css js ",
            backend :" node express mongo"
        } , 
        dataScience : {
            technologies : "abcd123" ,
            learnedfrom: "xyz"
        }
    }
}
// console.log(user);
console.log(user.skills.webdev);



// merging two objects into one
const obj1 ={ a:1 , b:2}
const obj2 ={ c:3 , d:4}

// const obj3 = Object.assign({}, obj1, obj2) // ye use kr sate h per isse easy niche wala hai
const obj3 = {...obj1 , ...obj2}
console.log(obj3);


// object consist of two things , key and value 
// let obj ={ key : value }


console.log(Object.keys(class2)); // printing keys of any obj 
console.log(Object.values(class2)); // printing values of any obj 
console.log(Object.entries(class2)); // printing each key and value as as array



//kabhi kabhi hmlog ko array k andr object milega , jb kabhi server se data aata to hmlog ko ye format dekhne milega 
const class3 = [
    {teacherOFenglish: "ak dubey" , teacherOFhindi : "sachin " , teacherOFmaths :"rohan"} , 
    {totalStudents: 56 , boys3 : 40 , girls3 : 16}
]

console.log(class3[1].girls3); // recall krne ka method id situation k liye 
console.log(class3)



const course ={
    course :  "web dev" ,
    teacher : "hitesh ", 
    price :999
}

// course.course
//  ye ak tarika to hai recall krne ka but same chiz multiple jagh recall krna padde to thora paareshani hota hai 
 const {teacher}= course
 // iss method ko dstructuring bolte hain
 const {teacher : instructor }= course // ye humllog ne ye shortcut creat kiya teaacher ko recal krne k lia 
 console.log(instructor) // aise krne pe bus instructor likhe se hmlog tercher recall kr pa rhe 


// api se jab v humme data milta hai to wo jason format me hota hai joki obj jaisa dikhta hai per wo obj nhi hota hai 

