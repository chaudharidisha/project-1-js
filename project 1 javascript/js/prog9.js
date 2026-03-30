// Find the square of a number. 
let num = 8;  

let result;

result = (num !== null && num !== undefined)
    ? "Square of " + num + " is " + (num * num)
    : "Invalid number";

console.log(result);