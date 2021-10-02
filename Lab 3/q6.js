/*
Question 6: Using the continue command and an if statement, only show the even number of lions, producing the following output: 
(You will need to google what the continue command does in a loop)
*/


// Her name is Surrey - I'm proud of her. I was working on her for a little bit
// because I was trying to jog my memory on how to find out if a number is even.


for (let s=1; s<=10; s++) {
    if (s % 2) {
        continue;
    }
    console.log("There is " + s + " lions");
}