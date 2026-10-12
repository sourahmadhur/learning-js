let MyDate = new Date() // date declare aise krte hain 
console.log(MyDate); // date js me 1970s se avi tak live count hota hai wohi isme aajjeb sa print hota hai 
console.log(MyDate.toString()); // isme date string me convert hota hai 
console.log(MyDate.toDateString()); // ye date or time print krta hai , 
console.log(MyDate.toLocaleString()); 



// aise humlog apna desired date define krte haii
// date me month 0 se count hona shuru hota hai 
let createdDate = new Date(2026 , 9 , 12)

console.log(createdDate.toDateString())

let createdDate2 = new Date(2026 , 9 , 12 , 13 , 2)
console.log(createdDate2.toLocaleDateString())
