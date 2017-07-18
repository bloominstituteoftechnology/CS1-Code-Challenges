/*  For today's coding challenge your job is to write functions
 *  so that each function call works.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  const greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
*/


// Write a function called firstItem that passes the first item of the given array to the callback function

const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

firstItem(foods, (firstItem) => {
  console.log(`The first item is ${firstItem}.`);
});

const firstItem = (arr, cb) => {
  cb(arr[0]);
};
// Write a function called getLength that passes the length of the array into the callback

getLength(foods, (length) => {
  console.log(`The length of the array is ${length}.`);
});

const getLength = (arr, cb) => {
  cb(arr.length);
};
// Write a function called last which passes the last item of the array into the callback

last(foods, (lastItem) => {
  console.log(`The last item in the array is ${lastItem}.`);
});

const last = (arr, cb) => {
  const index = arr.length -1;
  cb(arr[index]);
};
// Write a function called sumNums that adds two numbers and passes the result to the callback


sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});

const sumNums = (num1, num2, cb) => {
  cb(num1 + num2);
};
// Write a function called multiplyNums that multiplies two numbers and passes the result to the callback

multiplyNums(5, 10, (product) => {
  console.log(`The product is ${product}.`);
});
const multiplyNums = (num1, num2, cb) => {
  cb(num1 * num2);
};
// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

const contains = (arr, item, cb) => {
  if (arr.find(item) !== undefined) {
    return true;
  } else {
    return false;
  }
};
// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

removeDuplicates(foods, (uniqueFoods) => {
  console.log(`foods with duplicates removed: ${uniqueFoods}`);
});

const removeDuplicates = (arr, cb) => {
  const mySet = new Set();
  arr.forEach(mySet.add(element));
  cb(mySet);
};
// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.

forEach(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});
const forEach = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
};
