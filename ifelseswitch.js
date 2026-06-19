//if-else statement
let volume = 80;
if(volume > 70)
{
    console.log("Music is loud");
}
else if(volume > 40)
{
    console.log("Music is moderate");
}
else
{
    console.log("No audio");
}
//switch statement
let audio = 80;
switch(true)
{
    case audio > 70:
        console.log("Music is loud");
        break;
    case audio > 40:
        console.log("Music is moderate");
        break;
    default:
        console.log("No audio");
}
//ternary operator
let sound = 50
let output = sound > 70 ? "It is loud" : "It is less";
let sound2 = 75
let output2 = sound2 > 70 ? "It is high" : sound2 > 50 ? "It is moderate" : "It is low";
console.log(output);
console.log(output2);

let user = "sam";
let username = null;
let result = username ?? "Guest";
console.log(result);

let currentTrack = {
  title: "Starboy",
  artist: { name: "The Weeknd", country: "Canada" }
};
let noTrack = null;
let trackTitle = noTrack?.title ?? "Unknown Title";
let artistName = currentTrack?.artist?.name ?? "Unknown Artist";
console.log(trackTitle);
console.log(artistName);