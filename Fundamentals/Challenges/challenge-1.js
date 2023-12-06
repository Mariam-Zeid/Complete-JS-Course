// ?==================== Challenge 1 ====================?
/**
 * * Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
 * * BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
 * * and show  who has heigher BMI
 */

const markMass = 95;
const markHight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHight ** 2;
console.log(`Mark's BMI : ${markBMI.toFixed(2)}`);
const johnBMI = johnMass / johnHeight ** 2;
console.log(`John's BMI : ${johnBMI.toFixed(2)}`);

const markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
  console.log(`Mark has heigher BMI : ${markBMI.toFixed(2)}`);
} else {
  console.log(`John has heigher BMI : ${johnBMI.toFixed(2)}`);
}
