let lab2 = require("./lab2.js");

const readline = require('readline-sync');

var year = readline.questionInt(`What is the year? `);
var month = readline.question(`What is the month? `);
var day = readline.questionInt(`What is the day? `);

console.log(lab2.getDayOfTheWk(year, month, day));

lab2.makeCalendar();