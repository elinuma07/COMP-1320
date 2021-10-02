/*
Which of the following will be executed? How can we change the code to make the other 
console.log print out? (Note: do not change line 1)
*/

// Armaan's code 

/*
var nationality = "Canadian"; // do not change this line
var age = 30;

if (age >= 30 && nationality == "canadian") {
  console.log("Hello there");
} else if (age >= 30 && nationality != "canadian") {
  console.log("What is your nationality?");
}
*/

// Only the  console.log("What is your nationality?"); was able to be printed.


// MY SUPER AWESOME FIX

var nationality = "Canadian"; // WHY NOT CHANGE THIS LINE?!
var age = 30;

if (age >= 30 && nationality == "Canadian") {
  console.log("Hello Armaan!");
} else if (age >= 30 && nationality != "Canadian") {
  console.log("What is your nationality?"); // Prints "Hello Armaan!"
}

// And the crowd goes wild!!! "AHHHHHHH. Armaan! Armaan! Armaan!"
