// Write code to handle the following scenarios for the list below:

let fruits = ["Apple", "Banana", "Orange", "Strawberry", "Pineapple", "Pear", "Grapes", "Passionfruit", "Kiwi", "Mandarin"];

// 1. Accessing the first item from the fruits list (Apple)

console.log(fruits[0]);

// 2. Getting the length of the fruits list

console.log(fruits.length);

// 3. Getting the last item in the fruits list (Mandarin) without typing 9. 

console.log(fruits[fruits.length - 1]);

// 4. Adding the fruit cherry to the front of the list. 

let newLength =fruits.unshift("Cherry");
console.log(fruits);

// 5. Adding the fruit cherry to the end of the list. 

let otherNewLength = fruits.push("Cherry");
console.log(fruits);

// 6. Removing the fruit at the front of the list.

let first = fruits.shift();
console.log(fruits);

// 7. Removing the fruit at the end of the list.

let last = fruits.pop();
console.log(fruits);

// 8. Finding the index of Kiwi.

let fruity = fruits.indexOf("Kiwi");
console.log(fruits.indexOf("Kiwi"));

// 9. Using the index of Kiwi to remove it from the list. 

let removedItem = fruits.splice(fruity,1);
console.log(fruits);

// 10. Looping through each item of the list, printing: "I am eating a " plus the name of the fruit.

fruits.forEach(element => {
    console.log("I am eating a " + element);
}) 