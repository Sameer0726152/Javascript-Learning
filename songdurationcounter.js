let duration = 184;
let minutes = duration / 60;
minutes = Math.floor(minutes);
let seconds = duration % 60;
if(seconds < 10)
{
    console.log(`Song duration is ${minutes}:0${seconds}`);
}
else
{
    console.log(`Song duration is ${minutes}:${seconds}`);
}
