let student = 
{
    name: "Sameer",
    age: 19,
    isStudent: true,
    greet()
    {
        console.log(`Hello ${this.name}`);
    }
};
console.log(student.name);
console.log(student);
delete student.age;
console.log(student);
student.isStudent = false;
console.log(student);
console.log(student.greet());
console.log(Object.values(student));
console.log(Object.keys(student));

let student2 = 
{
    name: "Nihar",
    age: 20,
    skills:
    [
        "Html", "CSS", "IDK"
    ]
};
console.log(student2);
console.log(student2.skills);
console.log(student2.skills[1]);