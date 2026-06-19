//basics
let name = "Sam";
const age = 18;
let city = "Pune";
let hobbies = "Coding, Drawing and Gaming";

console.log("My name is " + name);
console.log("I'm " + age + " years old");
console.log("I live in " + city);
console.log("My hobbies are " + hobbies);
//backticks
console.log(`My name is ${name}`);
console.log(`I'm ${age} years old`);
console.log(`I live in ${city}`);
console.log(`My hobbies are ${hobbies}`);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name[2]);
console.log(name.slice(0, 2));
console.log(name.includes("a"));

console.log(Math.round(5.5));
console.log(Math.floor(5.9));
console.log(Math.ceil(5.1));
console.log(Math.random() * 100);
console.log(Math.abs(-98));
console.log(Math.max(2, 6, 9, 11));
console.log(Math.pow(2, 3));

let num = 9.765342;
console.log(num.toFixed(2));

//boolean
let volume = 80;
let isLoud = volume > 80;
console.log(isLoud);

console.table([
  { title: "Starboy", duration: 231 },
  { title: "Blinding Lights", duration: 200 }
]);

console.time("My Timer");
console.timeEnd("My Timer");

console.group("Song Info");
console.log("Title: Starboy");
console.log("Artist: The Weeknd");
console.groupEnd();