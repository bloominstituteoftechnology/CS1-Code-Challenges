/*
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */

const selectionSort = (arr) => {
  let smallest , temp;
  const length = arr.length;
  if(length === 0 || length === 1) {
    return arr;
  }
  for(let i = 0; i < length; i++) {
    smallest = i;
    for(let j = i + 1; j < length; j++) {
        if(arr[j] < arr[smallest]) {
            smallest = j;
        }
    }
    temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;
  }
  return arr;
};

console.log('\nTime Complexity O(n^2)');
console.log(selectionSort([16, 98, 87, 87, 55, 99, 36, 100, 187])); // [16, 36, 55, 87, 87, 98, 99, 100, 107]
console.log(selectionSort([44, 87, 32, 21, 3])); // [3, 21, 32, 44, 87]
console.log(selectionSort([25])); // [25]
console.log(selectionSort([])); // []