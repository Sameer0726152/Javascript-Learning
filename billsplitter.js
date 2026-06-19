const bill = 24762;
let people = 5;
let shared = bill / people;
let tip = 15;
let totalbill = bill + (bill * (tip / 100));
let discount;

if(bill > 20000)
{
    discount = 10;
    totalbill = totalbill - (totalbill * (discount / 100));
    totalbill = totalbill.toFixed(2);
    console.table
    ([
    {bill : 20000, people: 5, tip : `15%`, discount : `10%`, total : totalbill}
    ]);
}
else if(bill > 15000)
{
    discount = 5;
    totalbill = totalbill - (totalbill * (discount / 100));
    totalbill = totalbill.toFixed(2);
    console.table
    ([
    {bill : 20000, people: 5, tip : `15%`, discount : `5%`, total : totalbill}
    ]);
}
else
{
    totalbill = totalbill.toFixed(2);
    console.table
    ([
    {bill : 20000, people: 5, tip : `15%`, discount : "No discount available", total : totalbill}
    ]);
}
shared = Math.ceil(shared);
shared = shared.toFixed(2);
console.log(`Share per person is ${shared} rupees`);


