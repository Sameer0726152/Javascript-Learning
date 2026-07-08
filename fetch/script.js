const btn = document.querySelector('#load');
btn.addEventListener("click", function()
{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response)
    {
        console.log(response);
        return response.json();
    })
    .then(function(data)
    {
        console.log(data)
    })
});