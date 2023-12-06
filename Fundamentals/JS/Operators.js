// ?==================== Arithmetic Operators ====================?

/**
 * ! (+)
 * * 'add', 'concatenate'
 */
console.log(5 + 5); // 10
console.log("Hello " + 5); // Hello
console.log("5" + 5 + 5); // 555
console.log("5" + (5 + 5)); // 510
console.log(5 + 5 + "5"); // 105

/**
 * ! (-, *, /, %)
 * * 'add', 'implicit'
 */
console.log(5 ** 2); // 25 (5 to the power of 2 = 5 * 5)
console.log("5" * 5); // 25
console.log("5hello" * 5); // NaN

// ! (implicit) converting any data type to Number
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number("")); // 0
console.log(Number("M")); // NaN
console.log(Number(undefined)); // NaN

// ! NaN
console.log(typeof NaN); // number
console.log(NaN == NaN); // false (garbage numbers)

// ?==================== Assignment Operators ====================?

// ! (+=, -=, *=,  /=, %=, ++, --)

let price = 5000;
price += 300;
console.log(price); // 5300

price++; // 5301
console.log(price); // 5301

console.log(price++); // 5301
console.log(price); // 5302
console.log(++price); // 5303

// ?==================== Comparison Operators ====================?

/**
 * ! (==)
 * * comparing the value only
 *
 * ! (===)
 * ? AND
 * * comparing the value and the data type
 */

const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

/**
 * ! (!==)
 * ? OR
 */
console.log("50" !== 20); // true
console.log("50" !== "20"); // true
console.log("50" !== 50); // true
console.log("50" !== "50"); // true

// ?==================== Logical Operators ====================?
// ! (&&, ||, !)

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

// true
if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired); // false

// false
if (hasDriversLicense && hasGoodVision && isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
