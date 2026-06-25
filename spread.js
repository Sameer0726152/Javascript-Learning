let numbers = [1, 2, 3, 4, 5];
console.log(...numbers);

let frontend = ["HTML", "CSS"];
let skills = [...frontend, "JS"];
console.log(...skills);

let backend = ["Node", "API"];
let fullstack = [...frontend, ...backend];
console.log(...fullstack);

let student = {
    name: "Nihar",
    age : 19
};
let profile = {
    ...student,
    city : "Solapur"
};
console.log(profile);