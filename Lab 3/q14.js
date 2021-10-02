/*
Question 14

In the object below:

1. What are the keys?
2. Show two different ways to access the age value (bracket notation and dot notation)
3. Insert a key called hairColor with a value of black
4. Now change that value of hairColor from black to brown
5. Delete the height key and it's value
6. Check if the object has a key called eyeColor, and if it doesn't, print out: "Missing key"
7. Use a for in loop to loop through the object, printing the key and value for each pair.
8. Loop through and print all the keys in the object using Object.keys.
*/

var person = { name: 'Sarah', height: '6 feet', age: 22 };

// 1. The keys are name, height and age.

// 2. Bracket notation vs dot notation

//console.log(person['age']);
// console.log(person.age);

// 3. Insert a key called hairColor with the value black

person.hairColor = 'black';

console.log(person);

// 4. Now change the value of that hairColor from black or brown

person.hairColor = 'brown';

console.log(person);

// 5. Delete the height key and it's value

delete person.height;
console.log(person);

// 6. Check if the object has a key called eyeColor, and if it doesn't, print out: "Missing key"


if (person.eyeColor) {
    console.log("blue");
} else {
    console.log("Missing key");
}

// 7. Use a for in loop to loop through the object, printing the key and value for each pair.

for (const characteristics in person) {
        console.log(characteristics + " -> " + person[characteristics]);
}

// 8. Loop through and print all the keys in the object using Object.keys.

for (const characteristics of Object.keys(person)) {
    console.log(characteristics)
}