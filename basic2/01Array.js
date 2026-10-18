// declaration of array
const myArray= [1,23,442,2 , "sourabh" , true] // array can be of mixed data type

console.log(myArray[4]); // recalling elements of array by index , index starts from 0

//method of array
const myArr= [1 , 2 , 3 , 4 ]

console.log(myArr.length)
myArr.push(5) //  ak element last me add krta hai 
myArr.push(6)
myArr.pop() // removes last element 
myArr.unshift(0) // akk element shuru me add krta hai , per ye ak bad pratice h kyuki ye krne se pura array k elements ko apna loaction ya index change krna padta hai jiise memory kaafi use hota h 
// unshift humme majboori me use krna hai or large data set me avoide krna hai 
myArr.shift() // removes first element from the array 
console.log(myArr);
console.log(myArr.length)




const newArr = [9,8,7,6,5]

console.log(newArr.includes(2))
console.log(newArr.includes(5))

console.log(newArr.indexOf(2));
console.log(newArr.indexOf(5));


let strArr = newArr.join() // used to convert array into string
console.log(strArr);
console.log(newArr);
console.log(typeof strArr)

// investigation
console.log("our array before any opp" , newArr); // no changes in our defined array

console.log( newArr.slice(1, 3)); // index 1 ko include kiya printing me per last ko nhi , ye mian array ko impact nhi kiya 
console.log("our array after slice" , newArr);

console.log(newArr.splice(1, 3)) // isne 1 or 3rd element ko kaaat k ak new array banaya jisse main array me impact hua 
console.log("our array after splice" , newArr);
















