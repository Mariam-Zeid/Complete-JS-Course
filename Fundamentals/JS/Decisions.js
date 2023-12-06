// ?==================== If Else Statement ====================?

const age = 15;

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
