const boys = ["raj" , "lal" , "sonu"]
const girls = ["riya" , "summi" , "tina"]
const trans = [ "hina " , "raanu" , "rina"]


 // boys.push(girls) 
 // console.log(boys);
const all = boys.concat(girls) // concat ak k piche dusra array ko add krta h
console.log(all);

// better tarika arrays add krne ka  
const newall = [...boys, ...girls , ...trans] // ak array k piche dusra array add krne ka dusra method
console.log(newall);


// agr kbhi aisa situation ho jisme array k andr array ho
const marks = [ 16 , 31, 48 , [22, 4], 56 , [22 , 44,  [2, 6 ], 92] ,98]
console.log(marks[5][2][1]);

const newMarks = marks.flat(Infinity) // pura array ko hmne akhi array me forcefuly dal diya , with single element
// () k andr depths dalna hai joki humne infinty daala hai , iske jagh me  1,2 etc depth de sakte hain 
console.log(newMarks);


// Array.isArray() — Check karta hai ki value array hai ya nahi

const myArr = [1, 2, 3, 4];

console.log(Array.isArray(myArr));  // true
console.log(Array.isArray("Hello")); // false
console.log(Array.isArray({a: 1}));  // false

console.log(typeof [1, 2, 3]);       // "object"
console.log(Array.isArray([1, 2, 3])); // true
// JavaScript mein typeof array ko "object" batata hai. Isliye array ko accurately check karne ke liye Array.isArray() use karte hain.





// Array.from() ka kaam hai kisi iterable ya array-like object se naya array create karna.
const name = "Sourabh";

const ressult = Array.from(name);

console.log(ressult);


// Yahan num => num * 2 har element ko double karta hai.

// Yaad rakho: Array.from() ek naya array banata hai. Agar source pehle se array hai, toh naya array banega; source array khud replace nahi hota.
const numbers = [1, 2, 3, 4];

const result1 = Array.from(numbers, num => num * 2);

console.log(result1);



// Array.of() diye gaye arguments ko array ke individual elements bana deta hai.
const result = Array.of(10, 20, 30);

console.log(result);







