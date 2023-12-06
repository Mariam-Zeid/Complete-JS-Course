// ?==================== Challenge 1 ====================?
/**
 * * building the same tip calculator, using the same rules as before:
 * * Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%
 * * using functions
 */

// ? function expression takes bill value and return the tip
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
