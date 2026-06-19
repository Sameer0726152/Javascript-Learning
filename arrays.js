let fruits = 
[
    "apple", "banana", "Orange"
];

for(let fruit of fruits)    
{
    console.log(`Fruit: ${fruit}`);
}

fruits.pop();
console.log(`${fruits}`);
fruits.push("kiwi");
console.log(`${fruits}`);
fruits.shift();
console.log(`${fruits}`);
fruits.unshift("grapes");
console.log(`${fruits}`);
console.log(fruits.includes("banana"));
console.log(fruits.indexOf("kiwi"));
console.log(fruits.slice(1, 3));
console.log(fruits.splice(1, 0, "Mango"));
console.log(fruits.splice(1, 1));
console.log(fruits.join(", "));
console.log(fruits.sort());

let numbers = [1, 2, 3];
let tripled = numbers.map( num => num * 3 );
console.log(tripled)
let odds = numbers.filter(num => num % 2 === 1);
console.log(odds);
let result = numbers.find(num => num > 2);
console.log(result);