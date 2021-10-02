/* Convert the following from a while loop to a for loop. If you're not sure what a while loop is, you may
need to google it or look back at our slides from previous weeks.
*/

// Armaan's Version

/*
var i = 0;
var listOfColors = ["red", "green", "blue"];

while (i < listOfColors.length) {
    console.log(listOfColors[i]);
    i++;
}
*/

// Julia's Version ()

var j = 0;
var listOfColors = ["red", "green", "blue"];

for (let j = 0; j < listOfColors.length; j++) {
    console.log(listOfColors[j]);
    
}