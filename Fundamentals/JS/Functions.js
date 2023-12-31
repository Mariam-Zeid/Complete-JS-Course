// ?==================== Function Declarations ====================?

/**
 * ! can be invoked before they are defined (Hoisting)
 * * default value is Undefined for (parammeters, return)
*/

function calcSum1(x, y, z) {
  var sum = x + y + z;
  console.log(sum);
}
// ? overrides the above function
function calcSum1(x, y) {
  var sum = x + y;
  return sum;
  // Unreachable code
  console.log(sum);
}

// ignoring the third value
console.log(calcSum1(2, 3, 5));
// NaN y default value is Undefined
console.log(calcSum1(2));


function calcSum2(x, y) {
  var sum = x + y;
}

// default value of the return is Undefined
console.log(calcSum2(2, 3)); 



function calcAge1(birthyear) {
  const age = 2023 - birthyear;
  return age;
}

const age1 = calcAge1(2002);
console.log(age1);

// ?==================== Function Expression ====================?

/**
 * ! can't be access before initialization (Hoisting)
*/

const calcAge2 = function (birthyear) {
  return 2023 - birthyear;
};
const age2 = calcAge2(1991);
console.log(age2);


// ?==================== Arrow Function ====================?

/**
 * ! special form of Function Expressions
 * * we used if the return value happens implicilty
*/

const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(2006);
console.log(age3);

// Example with 2 Arguments
const yearsUntilRetirement = (name, birthYear) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${name} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement("Jonas", 1991));