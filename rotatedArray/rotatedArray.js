/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(n))
 */

const rotatedArraySearch = (arr, elem) => {
  const obj = {};
  obj.firstNumber = arr[0];
  obj.lastNumber = arr[arr.length - 1];
  for (i = 0; i < arr.length -1; i++) {
    if (arr[i] > arr[i + 1]) {
      obj.highestNumIndex = i;
      obj.highestNumber = arr[i];
      obj.lowestNumIndex = i + 1;
      obj.lowestNumber = arr[i + 1];
    };
  };
  if (elem < obj.lowestNumber || elem > obj.highestNumber) return null;
  if (elem === obj.firstNumber) return 0;
  if (elem === obj.lastNumber) return arr.length - 1;
  if (elem === obj.highestNumber) return obj.highestNumIndex;
  if (elem === obj.lowestNumber) return obj.lowestNumIndex;
  if (elem > obj.firstNumber) {
    for (i = 1; i < obj.lowestNumIndex; i++) {
      if (elem === arr[i]) return i;
    }
  }
  if (elem < obj.lastNumber) {
    for (i = obj.lowestNumIndex + 1; i < arr.length - 1; i++) {
      if (elem === arr[i]) return i;
    }
  }
};
