// concatination 

let myNmae = "sourabh" ;
let dob = "27/11/05";
let levelOfBadmosi = "high"

// old tarikaa 
console.log("hello my name  is "+ myNmae + " my date of birth is " + dob + " , and my level of badmashi is " + levelOfBadmosi);

// new or better tarika to concatinate strings isse humme code readability aur maintainability dono milega , aur ye humko ek hi line me code likhne me help karega
console.log(`hello my name is ${myNmae} , my date of birth is ${dob} and my level of badmashi is ${levelOfBadmosi}`);

// humlog string kok ak aur tarika se define kr sakte hai 
const name2 = new String ('sourabh kumar')
const name1 = "helllo"

console.log(name2)


//methods 
console.log(name2.__proto__.toUpperCase()) // ye syntax h per hmlog itna nhi v likhenge to chlega
console.log(name2.toUpperCase());
console.log(name1.toUpperCase())
console.log(name1)
console.log(name1.charAt(4)) // this shows character at 4th index 
console.log(name1.indexOf('l')) // this shows the character index

let newName2= name2.substring(0 , 5)
console.log(newName2);

let newName1 = name1.slice(-3 , 5)
console.log(newName1);


let username = "     sourabh  kumar     " 
console.log(username)
const newusername= username.trim() // trims extra space from start and end  of the string
console.log(newusername)


let user2 = "raaju broo!!!!! mera bhai h"
let newuser2 = user2.replace('broo' , 'bhaiiiii') // text replacement
console.log(newuser2)
console.log(user2.includes('bhaiiiii')) // to check that desired srtring is present or not
console.log(newuser2.includes('bhaiiiii'))

console.log(user2.split(' ')) // ye string ko array me split krta hai , based on anything joki hmne iss casee me space diya hai 


