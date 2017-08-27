/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */
const averages = (arr) => {
  const average = {
    mean: null,
    median: null,
    mode: null,
  };
  average.mean = mean(arr);
  average.median = median(arr);
  average.mode = mode(arr);
  return average;
}

const mean = (arr) => {
  let total = arr.reduce((sum, value) => {
    return sum + value;
  }, 0);
  return total/arr.length;
}

const median = (arr) => {
  const orderedArr = arr.sort();
  if (arr.length % 2 !== 0) {
    return orderedArr[Math.floor(arr.length / 2)];
  }
  const mid = arr.length / 2;
  return ((orderedArr[mid] + orderedArr[mid - 1]) / 2);
}

const mode = (arr) => {
  const orderedArr = arr.sort();
  const dict = {};
  let largest = 0;
  let largestKey = null;
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in dict)) {
      dict[arr[i]] = 0;
//      console.log(arr[i]);
    }
    dict[arr[i]]++;
//    console.log(`${arr[i]}: ${dict[arr[i]]}`);
  };
//  console.log(dict);
  const keys = Object.keys(dict);
//  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    console.log(dict[keys[i]]);
    if (dict[keys[i]] > largest) {
//      console.log(largest);
      largest = dict[keys[i]];
      largestKey = keys[i];
    }
  }
//  console.log(largest);
  return largestKey;
}


// **************************************
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6];
const arr3 = [5, 1, 3, 2, 4];
const arr4 = [1, 2, 2, 2, 3, 4];
// console.log(mean(arr1)); // 3
// console.log(median(arr1));
// console.log(median(arr2));
// console.log(median(arr3));
console.log(mode(arr4));

// console.log(averages(arr1));
