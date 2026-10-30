// for 
for (let i = 0; i <=10; i++) {
    const element = i;
 // console.log(element);
}
console.log("loop 2:");

for (let index = 1; index <= 10; index++) {
   // console.log("outer loop value" , index);
    
    for (let j = 1; j <=10; j++) {
        const element2 = j; 
        // console.log(`inner loop value :${element2} and outer loop value ${index}`);
       // console.log(`${index} * ${j} = ${index *j}`);
        
    }
}

console.log("loop 3 :");

    for (let j = 1; j < 21; j++) {
      // console.log(`${j} square is : ${j*j}`); 
    }
   
    // printing elements of array 
let bros = ["sourabh" , "sushank " , "anus" , "deepak "]
for (let index = 0; index < bros.length; index++) {
    const element = bros[index];
    // console.log(element);
}

// BREAK & CONTINUE
// to STOP any loop at our desired point we use break 

for (let index = 1; index <= 20 ; index++) {
    if (index== 5) {
        console.log("our breakpoint 5 is detected ");
        break; 
    }
   console.log("our index is :", index);
   
    
}

for (let index = 1; index <= 20 ; index++) {
    if (index== 5) {
        console.log("our breakpoint 5 is detected ");
        continue; 
    }
   console.log("our index is :", index);
   
    
}

    