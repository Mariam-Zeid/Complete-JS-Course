// ?==================== Challenge 7 ====================?
/**
 * * Let's improve Steven's tip calculator even more, this time using loops!
 * * Create an array 'bills' containing all 10 test bill values
 * * 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
 * * 3. Use the 'calcTip' function we wrote before (no need to repeat)
 * * to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations
 * * Addd 'calcAvg' to  calculate the average of all numbers in the given array.
 */


// ? function expression takes bill value and return the tip
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);


// ? function expression takes array and returns the avg
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));