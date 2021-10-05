const pipi = require("./MathHelper");
const fs = require("fs");

/*
Inside your main.js, you should have a function called processInput, passing to it what the user typed 
in (5 4 3 2). processInput should take the userInput and write it to a file called points.txt. points.txt 
should be saved in a folder named dataPoints. The dataPoints folder does not exist so you will need to 
create it using the fs.mkdir function in Node. After having written to the file, show a message in the 
console stating: "Content saved" through console. 
*/

function processInput(doodoo) {
    let x1 = doodoo[2];
    let y1 = doodoo[3];
    let x2 = doodoo[4];
    let y2 = doodoo[5];

    fs.mkdir('/Users/elisabethnuma/Desktop/COMP 1320 - Soft Dev/Week 5/Lab 4/dataPoints', (err) => {
        if (err) {
            return console.log(err);
        }
        fs.writeFile("./dataPoints/points.txt", `${doodoo}`, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("Content saved");

            fs.appendFile("./dataPoints/points.txt", `The distance between your two points: (${x1},${y1}), (${x2},${y2}) is ${pipi.distance(x1, y1, x2, y2)}`, (err) => {
                if (err) {
                    return console.log(err);
                }
            });
        });
    });


}

processInput(process.argv);
// console.log(`The distance between your two points: (${x1},${y1}), (${x2},${y2}) is ${pipi.distance(x1, x2, y1, y2)}`)
