/*
Show 6 examples of different operations you can perform on strings. After doing so, explain what 
it means for strings to be immutable in javascript. (You might need to google what immutability 
is in javascript).
*/

// Immutability means it cannot change.

let familyguy = [77, "Peter", "Lois", "Meg", "Chris", "Stewie", "Brian"];

console.log(familyguy[5] + " is a womanizer and " + familyguy[2] + " is always bullied.");

console.log(familyguy.slice(-2));

const a = 'you';
const b = 'ME';

console.log(a === b);

console.log(a.toUpperCase());

console.log(b.toLowerCase());

console.log(familyguy[0].toString());

familyguy = familyguy[0].toString();

console.log(typeof familyguy[0]);





