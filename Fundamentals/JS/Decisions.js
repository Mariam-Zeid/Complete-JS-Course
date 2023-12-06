// ?==================== If Else Statement ====================?

let age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}


const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`Sarah was born in the ${century}st century.`);

// ?==================== Ternary Operator ====================?
age = 18; // Overrides the previous value.
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

// OR
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);


// ?==================== Switch Case ====================?

let num = Number(
  window.prompt("Enter number to determine whether it is positive or negative.")
);
switch (true) {
  case num > 0:
    console.log(`${num} is positive number`);
    break;
  case num < 0:
    console.log(`${num} is negative number`);
    break;
  default:
    console.log(`you entered zero`);
}
