/*
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */

const selectionSort = (arr) => {
  let min = null;
  for (let i = 0; i < arr.length; i++) {
    min = indexOfMin(arr, i);
    swap(arr, min, i);
  }
  return arr;
};

const swap = (array, firstIndex, secondIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const indexOfMin = (array, startIndex) => {
  let minValue = array[startIndex];
  let minIndex = startIndex;
  for (let i = minIndex + 1; i < array.length; i++) {
    if(array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

console.log(selectionSort([1, 6, 2, 5, 3, 4]));
