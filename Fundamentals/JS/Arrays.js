// ?==================== Arrays ====================?

const friends = ["Michael", "Steven", ["Noah", "James"], "Peter"];
console.log(friends);
console.log(friends[2]); // ['Noah', 'James']
console.log(friends[2][1]); // James

// ! adding and removing element at the end of the array

// ? Adding element at the end of the  array
friends.push("Jay", "Lucas");
console.log(friends);
// ? Removing element at the end of the  array
const popped = friends.pop();
console.log(`Remove ${popped} from the array`);


// ! adding and removing element at the beginning of the array
// ? Adding element at the beginning of the array
friends.unshift("John");
console.log(friends);
// ? Removing element at the beginning of the array
friends.shift();
console.log(friends);


// ! concatenating 
const products = ["iphone", 'samsung','nokia', 'oppo', 'lg'] 
const users = ['ali', 'ahmed']
const newArr1 = products.concat(users)
console.log(newArr1);


// ! 'slice' creat a copy of an array (doesn't affect the original array)
const newArr2 = products.slice(1, 4)
console.log(newArr2);

// ! 'splice' removing elements from an array or replacing them
const deleteData = products.splice(2, 2, "huawei");
console.log(deleteData) // returning the deleted values
console.log(products);


// ! other methods
console.log(friends.indexOf("Peter"));
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}