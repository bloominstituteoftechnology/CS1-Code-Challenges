/*
 * Bubble sort is the most basic sorting algorithm.
 * It compares the first element of an array with the second element.
 * If the first element is greater than the second element then it swaps them.
 * Then it compares the second and third elements and swaps them if the second is larger.
 * Then it compares the third and fourth elements and does the same.
 * This continues and the the larger elements begin to "bubble" towards the end.
 * The loop then restarts and repeats this process until it makes a clean pass
 * without performing any swaps.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * What's the time complexity of your algorithm?  Are there ways you can improve it?
 *
*/

/*
 * Example:
 * bubbleSort([2, 1, 3]); // returns [1, 2, 3]
 *
*/

const bubbleSort = (arr) => {
  if(arguments.length === 0 || !Array.isArray(arr)) {
    return 'Invalid input array';
  }
  for(let i = (arr.length - 1); i >= 0; i--) {
    for(let j = (arr.length - 1); j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([1, 2, 3]));  // [1, 2, 3]
console.log(bubbleSort([2, 1, 3]));  // [1, 2, 3]
console.log(bubbleSort([])); // Invalid input array
console.log(bubbleSort({foo: 123})); // Invalid input array
console.log(bubbleSort('foobar')); // Invalid input array
console.log(bubbleSort(undefined)); // Invalid input array
console.log(bubbleSort([161, 48, 56, 545, 2, 77])); // [2, 48, 56, 77, 161, 545]
