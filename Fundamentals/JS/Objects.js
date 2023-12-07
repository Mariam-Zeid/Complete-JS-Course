// ?==================== Objects ====================?
/**
 * * Each object consist of (Property : Value)
 * * The order of properties doesn't matter
 */
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  frineds: ["Micheal", "Peter", "Steven"],
  hasDriverLicense: true,

  // // Method
  // calcAge: function (birthYear) {
  //   console.log(this); // the entire object
  //   return 2023 - birthYear;
  // },

  // calcAge: function () {
  //   return 2023 - this.birthYear;
  // },

  // Storing the returned value in a variable for flexible use
  calcAge: function () {
    this.age = 2023 - this.birthYear; // creating new property 'age'
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.age}-years old, and he has ${
      this.hasDriverLicense ? "a" : "no"
    } driver's license`;
  }
};

// ! Access Object properties
console.log(jonas); // the entire object
console.log(jonas.lastName); // dot notaion
console.log(jonas["lastName"]); // squre brackets notaion (We can use any expression that produces a value)
const nameKey = "Name";
console.log(jonas["last" + nameKey]);

// ! Adding more properties
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// ! Challenge
// * "Jonas has 3 friends, and his best friend is called Michael and lives in Portugal"
console.log(
  `${jonas.firstName} has ${jonas.frineds.length} frineds, and his best firned is called ${jonas.frineds[0]} and lives in ${jonas.location}`
);

// ! Invoking object method
console.log(jonas.calcAge());

// ! Challenge
// * "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
