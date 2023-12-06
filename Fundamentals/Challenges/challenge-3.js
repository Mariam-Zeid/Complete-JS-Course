// ?==================== Challenge 3 ====================?
/**
 * * build a very simple tip calculator
 * * the usual tip is 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%
 */

const bill = 277;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
