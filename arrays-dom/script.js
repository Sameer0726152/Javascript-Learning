const skillcontainer = document.querySelector(".skills-container");
const skillsarray = 
[
    {
        name: "HTML",
        level: "Pro"
    }, 
    {
        name: "CSS",
        level: "Tailwind"
    }, 
    {
        name: "JAVA",
        level: "Begineer"
    }, 
    {
        name: "JS",
        level: "DOM"
    }, 
    {
        name: "Python",
        level: "OOP"
    }, 
    {
        name: "C",
        level: "Intermediate"
    }
];

for (const skills of skillsarray)
{
    const skill = document.createElement("div");
    skill.className = "skill-card";
    skill.innerHTML = 
    `
        <h3>${skills.name}</h3>
        <p>Level: ${skills.level}</p>
    `
    skillcontainer.append(skill);
};