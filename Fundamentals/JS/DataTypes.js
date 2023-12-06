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
