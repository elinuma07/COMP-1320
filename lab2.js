/*
Name: Elisabeth Numa && Elisa H.
Student ID# A01287845
Course: COMP1320 - Intro to Soft Dev
Date: September 23rd, 2021
Title: Lab 2
Description: To calculate the day of the week, the leap year, showing all calendar dates in a year
and creating a user input to find out the date. "Her name is Herreira".
*/

// Step 1: Create the following arrays: getDayOfTheWk, monthCode, nameMonth, year = 2021
var week = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var monthCode = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
var nameMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Step 2 - calculate MM-DD-YYYY : create a function that 
// takes three parameters called “getDayOfTheWeek(year, month, day)” and leap year calculation
// Where to connect this in the code?

function getDayOfTheWk(year,month,day) { // finish at home for 6 and zero
    // Step 1
    var step1 = parseInt((year % 100) / 12);
    var step2 = step1 % 12;
    var step3 = parseInt(step2 / 4);
    var step4 = step3 + day;
    var monthCode = null;
    if (month == "January" || month == "October") {
        monthCode = 1;
    } else if(month == "May") {
        monthCode = 2; 
    } else if(month == "August") {
        monthCode = 3; 
    } else if(month == "February" || month == "March" || month == "November") {
        monthCode = 4; 
    } else if(month == "June") {
        monthCode = 5; 
    } else if(month == "September" || month == "December") {
        monthCode = 6; 
    } else if(month == "April" || month == "July") {
        monthCode = 0; 
    }

    var result = (step1 + step2 + step3 + step4 + monthCode) % 7;
    return (week[result]);

    var leapyear = (year % 100 == 0);
    var notleapyear = (year % 100 != 0);

    if (year % 2) {
        return(leapyear);
        } else if (year % 100 != 0) {
        return(notleapyear);
    }
    
    // If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
    // If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
    // If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
    // The year is a leap year (it has 366 days).
    // The year is not a leap year (it has 365 days).
    // If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// ^ what happens if this is true? (and by true, I mean year % 4 does indeed == 0 )

}


// Step 3 - List the days in each month of year 2021 // missing days of the week

function makeCalendar() {
    var year = 2021;
    
for (var i = 1; i <= 31; i++) {
    var result = getDayOfTheWk(year, nameMonth[0], i);
    console.log("Today is " + result +  " " + nameMonth[0] + " " + i + " " + year + " " );
}
for (var i = 1; i <= 28; i++) {
    var result = getDayOfTheWk(year, nameMonth[1], i);
    console.log("Today is " + result + " " + nameMonth[1] + " " + i + " " + year + " " );
}
for (var i = 1; i <= 31; i++) {
    var result = getDayOfTheWk(year, nameMonth[2], i);
    console.log("Today is " + result + " " + nameMonth[2] + " " + i + " " + year + " " );
}
for (var i = 1; i <= 30; i++) {
    var result = getDayOfTheWk(year, nameMonth[3], i);
    console.log("Today is " + result + " " + nameMonth[3] + " " + i + " " + year + " " );
}
for (var i = 1; i <= 31; i++) {
    var result = getDayOfTheWk(year, nameMonth[4], i);
    console.log("Today is " + result + " " + nameMonth[4] + " " + i + " " + year + " " );
}
for (var i = 1; i <= 30; i++) {
    var result = getDayOfTheWk(year, nameMonth[5], i);
    console.log("Today is " + result + " " + nameMonth[5] + " " + i + " " + year + " " );
}
for (var i = 1; i <= 31; i++) {
    var result = getDayOfTheWk(year, nameMonth[6], i);
    console.log("Today is " + result + " " + nameMonth[6] + " " + i + " " + year + " " );
}
for (var i = 1; i <= 31; i++) {
    var result = getDayOfTheWk(year, nameMonth[7], i);
    console.log("Today is " + result + " " + nameMonth[7] + " " + i + " " + year + " " );
}
for (var i = 1; i <= 30; i++) {
    var result = getDayOfTheWk(year, nameMonth[8], i);
    console.log("Today is " + result + " " + nameMonth[8] + " " + i + " " + year + " " );
}
for (var i = 1; i <= 31; i++) {
    var result = getDayOfTheWk(year, nameMonth[9], i);
    console.log("Today is " + result + " " + nameMonth[9] + " " + i + " " + year + " " );
}
for (var i = 1; i <= 30; i++) {
    var result = getDayOfTheWk(year, nameMonth[10], i);
    console.log("Today is " + result + " " + nameMonth[10] + " " + i + " " + year + " " );
}
for (var i = 1; i <= 31; i++) {
    var result = getDayOfTheWk(year, nameMonth[11], i);
    console.log("Today is " + result + " " + nameMonth[11] + " " + i + " " + year + " " );
}
}


module.exports = {getDayOfTheWk, makeCalendar};