/**
  CODE CHALLENGE #17
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
  for(let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      console.log(temp, array);
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
};


// TEST SUITE
// console.log(insertionSort([2, 1, 3, 7, 4, 2, 9, 3, 8])); // yields [1, 2, 2, 3, 3, 4, 7, 8, 9]
console.log(insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1])); // yields [1, 2, 3, 4, 5, 6, 7, 8, 9]
