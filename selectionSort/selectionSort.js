/*
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */

const selectionSort = (arr) => {
  const sortedArr = [];
  let tempArr;;
  while (arr.length > 0) {
    let lowestValue;
    let j;
    for (i = 0; i < arr.length; i++) {
      if (lowestValue === undefined || lowestValue > arr[i]) {
        lowestValue = arr[i];
        j = i;
      }
    }
    tempArr = arr.splice([j], 1);
    sortedArr.push(tempArr.pop());
  }
  return sortedArr;
};
