// ?==================== Challenge 6 ====================?
/**
 * * Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
 * * BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
 * * and show  who has heigher BMI
 *
 * ! create an object with properties for their full name, weight, and height
 */

const mark = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(`${mark.BMI.toFixed(2)}, ${john.BMI.toFixed(2)}`);

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI.toFixed(2)}) is higher than ${
      john.fullName
    }'s BMI (${john.BMI.toFixed(2)})`
  );
} else if (john.BMI > mark.BMI) {
  console.log(
    `${john.fullName}'s BMI (${john.BMI.toFixed(2)}) is higher than ${
      mark.fullName
    }'s BMI (${mark.BMI.toFixed(2)})`
  );
}

