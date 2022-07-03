// Write a function canSum(targetSum, numbers) that takes in a targetSum and
// an array of numbers as argument.
// the function should return a boolean indicating whether or not it is possible
// generate the targetSum using the numbers in the array.
// Note :- You may use an element of the array as many times as needed.

// without memoization
// O(n ** m) time complexity
// O(m) space complexity
const canSum = (targetSum, numArray) => {
  if (targetSum < 0) return false;
  if (targetSum === 0) return true;

  for (let val of numArray) {
    const remaining = targetSum - val;
    if (canSum(remaining, numArray)) return true;
  }

  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
