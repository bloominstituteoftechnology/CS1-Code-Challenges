const foods = ['meat', 'veggie', 'fruit', 'veggie', 'meat', 'dairy', 'sweets'];

const firstItem = (arr, cb) => {
  return cb(arr[0]);
};
firstItem(foods, (firstItem) => {
  console.log(`The first item is ${firstItem}.`);
});

const getLength = (arr, cb) => {
  return cb(arr.length);
};
getLength(foods, (length) => {
  console.log(`The length of the array is ${length}.`);
});

const last = (arr, cb) => {
  return cb(arr.length - 1);
};
last(foods, (lastItem) => {
  console.log(`The last item in the array is ${lastItem}.`);
});

const sumNums = (n1, n2, cb) => {
  return cb(n1 + n2);
};
sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});

const multiplyNums = (n1, n2, cb) => {
  return cb(n1 * n2);
};
multiplyNums(5, 10, (product) => {
  console.log(`The product is ${product}.`);
});

const contains = (arr, item, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return true;
  }
  return false;
};
contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

const uniqueFoods = arr => [...new Set(arr)];
const removeDuplicates = (arr, cb) => cb(arr);
removeDuplicates(foods, uniqueFoods);

const forEach = (arr, cb) => {
	for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
};
forEach(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});
