/**
 * Insertion sort is a basic sorting algorithm. Insertion sort
 * iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 * https://en.wikipedia.org/wiki/Insertion_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms#insertion-sort
 **/

// Example usage:
// insertionSort([2, 1, 3, 7, 4, 2, 9, 3, 8]); // yields [1, 2, 2, 3, 3, 4, 7, 8, 9]

const insertionSort = (array) => {
  // Your code goes here. Feel free to add helper functions if needed.
  let tempNum;
  if (array[1] < array[0]) {
    tempNum = array[1];
    array[1] = array [0];
    array[0] = tempNum;
  }
  for (i = 2; i < array.length; i++) {
    tempNum = array[i];
    let j = 0;
    let x = i;
    let y = i - 1;
    while (j <= i) {
      if (array[i] < array[j]) {
        while (y >= j) {
          array[x] = array [y];
          x--;
          y--;
        }
        array[j] = tempNum;
      } else {
        j++
      }
    }
  }
  return array;
};
