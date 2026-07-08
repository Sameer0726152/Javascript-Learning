const test = document.querySelector("#test");
test.addEventListener("click", function()
{
    try 
    {
        const hero = document.querySelector("#hero");
        hero.innerText = "hero";
    }
    catch(error)
    {
        console.log("Wrong file selected");
        console.log(error.message);
    }
});
