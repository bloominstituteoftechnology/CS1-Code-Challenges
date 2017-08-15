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
// the iterative way to do it...
//  const rotatedArraySearch = (arr, item) => {
//      return arr.indexOf(item);

//  };

const rotatedArraySearch = (arr, number) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (arr[middle] = number) return middle;
    if (arr[low] <= arr[middle]) {
      if( arr[low] <= number && number < arr[middle]) {
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    } else {
      if (arr[middle] < number && number <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid -1;
      }
    }
  }
  return null;
};
