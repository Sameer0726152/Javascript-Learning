// Destructuring Objects
let student = 
{
    name : "Kunal",
    age : 19,
    town : "Dondaicha"
};

let {name, age, town} = student;
console.log(name);
console.log(age);
console.log(town);

//Renaming Variables
let {name : Studentname} = student;
console.log(Studentname);
console.log(age);
console.log(town);

//Adding Variables
let {isStudent = false} = student;
console.log(isStudent);

//Destructuring Arrays
let colors = 
[
    "Red",
    "Green",
    "Blue"
];

let [first, , third] = colors
console.log(first);
console.log(third);

//Swapping Variables
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(`a = ${a}, b = ${b}`);

//DEstructuring Function Return
function getUser() 
{
    return{
        name: "Sameer",
        age: 19
    };
}

let {name : guname, age :  guage} = getUser();
console.log(`${guname}, ${guage}`);
