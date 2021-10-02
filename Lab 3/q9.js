/*
Create a function that can add two numbers, and call it addFunc. Write the function as a 
function declaration and as a function expression. 
*/

// Fn declaration:
function addFunc(Chemistry, Physics) {
    return Chemistry + Physics;
  }
  
  console.log((addFunc(78, 67))/2);


// Fn expression:
let addFunc2 = function(a, b) {
    return a + b;
  }

console.log(addFunc2(2,3));

