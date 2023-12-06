// ?==================== DataTypes ====================?

/**
 * ! JS is loosely datatype
 *
 * 1- Primitive_datatypes
 * * (Numbers, String, Boolean, Undefined, Null)
 */

let javascriptIsFun = true;
console.log(javascriptIsFun); // true
console.log(`type of javascriptIsFun is : ${typeof javascriptIsFun}`); // boolean

// ? reassign (javascriptIsFun) variable  'Dynamic typing'

javascriptIsFun = "YES";
console.log(javascriptIsFun); // YES
console.log(`type of javascriptIsFun is : ${typeof javascriptIsFun}`); // string

// ? define a variable without value

let year;
console.log(year); // undefined (value)
console.log(`type of year is : ${typeof year}`); // undefined (type)

// ? showing the type of the null value

console.log(`type of null is : ${typeof null}`); // object

// ? String and Template Literal
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const now = 2023;

const jonas =
  "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${now - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`string text line 1
string text line 2
string text line 3`);
