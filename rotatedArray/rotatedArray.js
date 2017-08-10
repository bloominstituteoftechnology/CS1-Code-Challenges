/* cc24 rotatedArray

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

 1) presuming a sorted & offset array
 2) search for the first index pair (arr[n] and arr[n+1]) where arr[n] > arr[n+1]
 3) arr[n] is the high value of the range
 4) arr[n+1] is the low value of the range
 5) query integer is outside range, return null
 5) index position of arr[n+1] is the offset where [n+1] minus offset = 0
 6) not sure how to quickly return
*/

const rotatedArraySearch = (arr, queryNum) => {
  let i, high, low, highIndex, lowIndex;
  // search for the first pair where arr[n] > arr[n+1]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      [high, low, highIndex, lowIndex] = [arr[i], arr[i + 1], i, i + 1];
    }
  };
  // console.log(`HI value: ${high}, is at index: ${highIndex}\nLO value: ${low}, is at index: ${lowIndex}`);
  if (queryNum >= low && high >= queryNum) {
    console.log( 'poop');
  } else { return null; }
};

// TEST SUITE
rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], -6);
