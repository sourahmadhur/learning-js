// switch 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month = 3
switch (month) {
    case 1:
        console.log("month is january");
        break;
    case 2:
        console.log("month is febuary");
        break;
    case 3:
        console.log("month is march");
        break;
    case 4:
        console.log("month is april");
        break;

    default : 
    console.log("default case match");
    

        break;
}
// agr case k niche break nahi dalenege , or case satisfy hone k baad v  niche ka sara case run hoga except default 
// switch me strings v le sakte hain ya or v koi data type dal sakte hain 

const month2 = "april"
switch (month2) {
    case "january":
        console.log("month is january");
        break;
    case "febuary":
        console.log("month is febuary");
        break;
    case "march":
        console.log("month is march");
        break;
    case "april":
        console.log("month is april");
        break;

    default : 
    console.log("default case match");
    

        break;
}

