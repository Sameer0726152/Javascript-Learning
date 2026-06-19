//datatypes
//primitive datatypes
let age = 18;           //number
let name = "Sam";       //string
let isStudent = true;   //boolean
let x = null;           //null
let y;                  //undefined

console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof x);
console.log(typeof y);

let idk = Number(age);
console.log(idk);

let username = "";
if(username)
{
    console.log("Welcome" + username);
}
else
{
    console.log("Enter username");
}
let displayName = username || "Guest";
console.log(displayName);