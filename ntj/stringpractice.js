//this is practice on string



// my first javascript code
console.log('Hello world');
console.log(typeof 'jerry');
console.log(typeof 42);
console.log(typeof true);


// STRINGS VARIABLES
const myVariable = "Mathematics is way to learn calculation";


// The Lenght property
console.log(myVariable.length);
//this provides the total number of character that is in the variable


// The string methods
console.log(myVariable.charAt(0));
// This provides the character in which the index was set
//remember the the index count starts from zero(0) and not (1)

//Still under string method
console.log(myVariable.indexOf("way"));
// This provides the total number of characters before the provided word

//Still under string method
console.log(myVariable.lastIndexOf("way"));
// This provides the last index of it's simlar to indexof

console.log(myVariable.slice(5, 30));
//This returns from the 5th position to the 30th position

console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
// this methods makes the work in uppercase and lowercase

console.log(myVariable.includes("jerry"));
console.log(myVariable.includes("learn"));
// this [ includes method] shows the boolean answer true/false 
//it is used to confirm if a word is in the text 

console.log(myVariable.split("to"));
// this splits the string into two from where was specified
//one more expamle to better understand split
console.log("jerry john jax".split(" "));
//this splits the sentence anytime it sees a space ( )



