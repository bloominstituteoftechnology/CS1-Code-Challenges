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
  // let arr = [];
  let len = array.length;
  for (let i = 0 ; i < len ; i++) {
    let element = array[i];
    let j = i;
    while (j > 0 && (array[j-1]>element)) {
      array[j] = array[j-1];
      j = j - 1;
      array[j] = element;
    }
    console.log(array);
  }
  return array;
};
const insert = insertionSort([2, 1, 3, 7, 4, 2, 9, 3, 8]); // yields [1, 2, 2, 3, 3, 4, 7, 8, 9]