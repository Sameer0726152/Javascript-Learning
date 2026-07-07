const promise = new Promise(function(resolve, reject)
{
    setTimeout(function()
    {
        resolve("Javascript Course Completed");
    }, 2000);
    setTimeout(function()
    {
        reject("Internet Disconnected");
    }, 2000);
});

promise.then(function(message)
{
    console.log(message);
});

promise.catch(function(error)
{
    console.log(error);
});