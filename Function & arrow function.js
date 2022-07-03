// Function
// 1st type
function sayme ()
{
    console.log("Amit Kumar Das");
}
sayme();                                        // call the function

// 2nd type
function meso (nam)
{
    console.log(nam)
}
meso ("Amit Kumar Das");                        // call the function


// Arrow Function
// 1st type
let saymei = (name) =>
{
    console.log(name);
}
saymei ("Amit Kumar Das");                                        // call the function

// 2nd type
let saymer = () =>
{
    console.log("Amit Kumar Das");
}
saymer ();                                        // call the function

// 3rd type
let saye = (name) =>
{
    return name ;
}
console.log(saye ("Amit Kumar Das"));                                        // call the function

// 4th type (mostly used when pass one argument & if you pass two argument, this technique not used)

let two_time_number = (number) => number * 2

console.log(two_time_number (20));                                        // call the function
