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

const firstItem = (arr, cb) => {
   cb(arr[0]);
});

// Write a function called getLength that passes the length of the array into the callback

const getLength = (arr, cb) => {
  cb(arr.length);
});

// Write a function called last which passes the last item of the array into the callback

const last = (arr, cb) => {
  cb(arr[arr.length-1]);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback


const sumNums = (num1, num2, cb) => {
  const sum = num1 + num2;
  cb(sum);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
// ^^ Did you mean multiply two numbers?

const multiplyNums = (num1, num2, cb) => {
  const product = num1 * num2;
  cb(product);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

const contains = (arr, item, cb) => {
  if (arr.includes(item)) {
    cb(true);
  } else {
    cb(false);
  }
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

const removeDuplicates = (arr, cb) => {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  cb(unique);
});

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.

const forEach = (arr, cb) => {
  arr.forEach((value) => {
    cb(value, arr.indexOf(value));
  });
});
