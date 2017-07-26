// Write a function called getLength that passes the length of the array into the callback

// const multiplyNums = (product, cb) => {
//   cb(product);
// };

// multiplyNums(5, 10, (product) => {
//   console.log(`The product is ${product}.`);
// });
const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

const last = (theArray, cb) => {
  cb(theArray[theArray.length - 1])
}

last(foods, (lastItem) => {
  console.log(`The last item in the array is ${lastItem}.`);
}); 