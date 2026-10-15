let MyDate = new Date() // date declare aise krte hain 
console.log(MyDate); // date js me 1970s se avi tak live count hota hai wohi isme aajjeb sa print hota hai 
console.log(MyDate.toString()); // isme date string me convert hota hai 
console.log(MyDate.toDateString()); // ye date or time print krta hai , 
console.log(MyDate.toLocaleString()); 



// aise humlog apna desired date define krte haii
// date me month 0 se count hona shuru hota hai 
let createdDate = new Date(2026 , 9 , 12)

console.log(createdDate.toDateString())


// to represent date with time 
let createdDate2 = new Date(2026, 9, 1, 05, 32, 08)
console.log(createdDate2.toLocaleString())

// to represent using dd mm yyyy , indian format me 
let mydobb = new Date(2005 , 10 , 27 , 6, 30) // ye array nhi h date to iska index 1 se shuru hua 
console.log(mydobb.toLocaleString("en-IN"))


// aise hmlog koi v exact time nikallenge jisse hmlog badd me project banane me help lenge jaha hlog ko bhut jada time specific kaam krna hoga wahan ye use hoga 
console.log(mydobb.getTime()); // ye milli sec me output deta hai
console.log(Math.floor(mydobb.getTime()/1000)); // sec me output milega

console.log(mydobb.getDay()) // day - sunday-0 , monday-1 , tue-2 , and so on
console.log(mydobb.getMonth()) // jan-0 , feb-1 , and so on
console.log(mydobb.getDate()); // returns date
console.log(mydobb.getHours());
console.log(mydobb.getMinutes());


let name = 'sourabh'
console.log(`hello my name is ${name } , my birthday is on ${mydobb.getDate() }  of month ${mydobb.getMonth() +1}  and the time was ${mydobb.getHours()} hours and ${mydobb.getMinutes()}  minutes`)

let newdate = new Date();

console.log(newdate.toLocaleString('default', {
    weekday: "long"
   
}));



