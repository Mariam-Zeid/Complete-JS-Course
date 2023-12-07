// ?==================== For loop ====================?

// * loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// * Nested loop
// for (let exercise = 1; exercise < 3; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 3; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

// ! Iterating through an array.

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = []; // empty array

for (let i = 0; i < jonas.length; i++) {
  // *Printing each element individually.
  console.log(jonas[i]);

  // *Storing the data type of each element within the array.
  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

/////////////////////////////////

const years = [2002, 2006, 2009, 2011];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

/////////////////////////////////
// ! Breaking and Continuing
/**
 * * continue: The current iteration stops, and the next one begins.
 * * break: Exits from the entire loop.
 */

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BACKWARD LOOPING ---");
// Backward looping
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// ?==================== While loop ====================?
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}