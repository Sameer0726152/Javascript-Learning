const saveBtn = document.querySelector("#save");
const loadBtn = document.querySelector("#load");
const deleteBtn = document.querySelector("#delete");

const skills = ["JavaScript", "Python", "Java"];

saveBtn.addEventListener("click", function()
{
    localStorage.setItem("skills", JSON.stringify(skills));
});

loadBtn.addEventListener("click", function()
{
    const skill = JSON.parse(localStorage.getItem("skills"));
    console.log(skill);
});

deleteBtn.addEventListener("click", function()
{
    localStorage.removeItem("skills");
    console.log("Deleted");
});

