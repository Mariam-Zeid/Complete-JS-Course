// ?==================== Challenge 3 ====================?
/**
 * * There are two gymnastics teams, Dolphins and Koalas. They compete against each other
 * * Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team)
 * * A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
 */

// ? arrow function calculates the average 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// ? function expression determine the winner for both 
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas * 2)
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  else if (avgKoalas > avgDolphins * 2)
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  else console.log("No team wins...");
};

let dolphinsScore = calcAverage(85, 54, 41);
console.log(`The dolphins average score is ${dolphinsScore.toFixed(2)}`);

let koalasScore = calcAverage(23, 34, 27);
console.log(`The koalas average score is ${koalasScore.toFixed(2)}`);

checkWinner(dolphinsScore, koalasScore);
