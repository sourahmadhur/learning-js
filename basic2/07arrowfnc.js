const user= {
    username : "sourabh",
    moneyPaid: 120 , 
    wellcomeMessage :  function () {
        // this keyword scope k andr k elemets ko retrive krne ka kaam krta hai 
        //this currrent contect ki baat krta hai 
        console.log(`hello ${this.username} , wellcome to the website`);
        // console.log(this);
        
        
    }
}

console.log(user.wellcomeMessage())

user.username = "sam"
console.log(user.wellcomeMessage())

// syntrax of definig normal function 
const myBro = {
        BROname : "sourabh",
}
const bro = function(anyBro){
    console.log(`${anyBro.BROname} brooo !!!! whatsapp`);
    
}
bro(myBro)


// syntax of defining arrow function
// const addTwo = (number1 , number2) => {
//      return number1 + number2
   
// }

// console.log(addTwo(1, 5))

// another way (implcit return)
// const addTwo = (number1 , number2) =>  number1 + number2
// console.log(addTwo(1, 5))

// aise hmlog react me bhut jada use krnenge
const addTwo = (number1 , number2) =>  (number1 + number2)
console.log(addTwo(1, 5))

// () => {}
// () => ()
    





