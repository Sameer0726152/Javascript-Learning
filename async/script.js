const btn = document.querySelector("#load");
btn.addEventListener("click", loadUsers);

async function loadUsers()
{
    try
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}