// Observe the following formula. It allows you to find the distance between two points 
// (x1, y1) and (x2, y2).

// Have a file called mathHelpers.js which contains a squareRoot function, a square function, and a 
// distance function which uses internally your squareRoot and square function to calculate distance. 
// Export your distance function from this file. 

// Distance formula:
// d = \sqrt {\left( { x_2 - x_1 } \right)^2 + \left( {y_2 - y_1 } \right)^2 }

// Terminal should print:
// 1. Your program will be run like you see in the box above. 
// The format is: x1 y1 x2 y2
// node main.js 10 5 2 3

// Two files need to be created - main.js and MathHelper.js

function distance(x1,y1,x2,y2) {
    const distFormula = Math.sqrt((Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2)));
    return distFormula;
}

module.exports = {distance};