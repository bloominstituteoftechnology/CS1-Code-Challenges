/*
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */

const selectionSort = (arr) => {
<<<<<<< HEAD
  // const sortedArr = [];
  let index;
  for (let i = 0; i < arr.length; i++) {
    index = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return arr;
=======

>>>>>>> 9429740ef0bb6a7c9e352e877fccbfa19d2cae8d
};