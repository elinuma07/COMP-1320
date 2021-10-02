/*
Demonstrate how "hoisting" works in Javascript with variables (var keyword) as well as with 
function declarations. 
*/

let whatstheword = 67;
    
function hoist() {
    yolo = 21;
    wifeleft = 43;
    
}

hoist();
    console.log("My wife left me at the age of " + wifeleft + " for my best friend. No wonder he's been helping her around the house while I was working!");
    console.log("You know you ONLY live about " + yolo + " times!");
    console.log("I love being " + whatstheword + " at the front of the line! #1ST #GRANDMAPRIVILEDGES");




    