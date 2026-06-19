// Arithmetic
let a = 10;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Comparison
let c = 5;
let d = "5";
let e = 8
console.log(c == d);
console.log(c === d);

// Logical
let isLoggedin = true;
let isMuted = false;
console.log(isLoggedin && isMuted);
console.log(isLoggedin || isMuted);
let and = isLoggedin && isMuted;
let or = isLoggedin || isMuted;
console.log(and);
console.log(or);

// String
let firstName = "sam";
let lastName = "idk";
console.log("Name is " + firstName + " " + lastName);
console.log(`Name is ${firstName} ${lastName}`); // Alternative

// Type Conversion
// String to Number
let num = "42";
let n1 = Number(num);
let n2 = parseInt("49.2pe");
let n3 = parseFloat("49.2pe");
// Number to String
let idk = 6;
let idk2 = String(idk);
let idk3 = idk.toString();
let idk4 = idk.toFixed(2);
console.log(idk2, idk3, idk4);

