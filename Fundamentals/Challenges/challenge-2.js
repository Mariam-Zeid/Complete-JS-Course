// ?==================== Challenge 2 ====================?
/**
 * * There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times.
 * * Calculate the average score for each team, a team only wins if it has a higher score than the other team,
 * * and the same time a score of at least 100 points
 * * The winner with the highest average score wins a trophy! 
 */

const dolphinsScore = (96 + 108 + 89) / 3;
console.log(`The dolphins average score is ${dolphinsScore.toFixed(2)}`);

const koalasScore = (88 + 91 + 110) / 3;
console.log(`The koalas average score is ${koalasScore.toFixed(2)}`);

const minimumScore = 100;
console.log(
  `The minimum score for a team to qualify for the final is ${minimumScore}`
);

if (dolphinsScore > koalasScore && dolphinsScore >= minimumScore)
  console.log(`Dolphins win the trophy 🏆`);
else if (koalasScore > dolphinsScore && koalasScore >= minimumScore)
  console.log(`Koalas win the trophy 🏆`);
else if (
  koalasScore === dolphinsScore &&
  dolphinsScore >= minimumScore &&
  koalasScore >= minimumScore
)
  console.log(`Both win the trophy 🏆`);
else {
  console.log("No one wins the trophy 😭");
}