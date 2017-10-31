/*
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */

const selectionSort = (arr) => {
  let temp = [arr[0], 0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (temp[0] > arr[j]) {
        temp = [arr[j], j];
      }
      if (j === arr.length - 1) {
        arr.splice(temp[1], 1);
        arr.splice(i, 0, temp[0]);
        if (i === arr.length - 1) {
          return arr;
        } else {
          temp = [arr[i + 1], i + 1];
        }
      }
    } 
  }
  return arr;
};

// array = [1, 6, 2, 5, 3, 4];
// console.log(selectionSort(array));