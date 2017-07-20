/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * */

/**
 *  * const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 *	* console.log(index); // 1
**/

// // version 1: indexOf
// const binarySearch = (nums, target) => {
//   return nums.indexOf(target);
// };

// version 2: Divide and Conquer
// I: A SORTED array (low to high) of integers AND a target number
// O: the array index of the target
  //  we are presuming the array actually contains target - no if null, then... check (yet)
/* FUNCTION:
  * We know the target is at one of the array indexes. Take the number of indexes, divide by half round up or down.
    * Is target the number at that index? return index #
    * Is the target lower than the number at that index? Then do the same for the next range using the next lower index and index 0.
    * is the target higher than the number at that index? Then do the same for the next range using the next higher to index.length -1.
*/
const binarySearch = (nums, target) => {
  if (nums.length < 1) return "Error001: empty array";
  if (nums.indexOf(target) === -1) return "Error002: target number not in array";
  let minIndex = 0;
  let maxIndex = nums.length - 1;
  // console.log(`Index # {min: ${minIndesx}, max: ${maxIndex}}`)
  // High or Low check
  let guess = nums[Math.floor(maxIndex / 2)]
  console.log(`GUESSING target value: ${target} is at index: nums[${guess}]`)
  if (target === guess)
    return `MATCH! The value at nums index position [${guess}] is: ${nums[guess]}`;
  if (target < nums[guess]) {
    maxIndex = guess - 1;
    let numSlice = nums.slice(minIndex, maxIndex);
    console.log(`Target is LESS THAN value at index:  nums[${guess}]:  new index range {min: ${minIndex}, max: ${maxIndex}}`)
    return binarySearch(numSlice, target);
  } else {
    minIndex = guess + 1
    let numSlice = nums.slice(minIndex, maxIndex);
    console.log(`Target is GREATER THAN value at index: nums[${guess}]: new index range {min: ${minIndex}, max: ${maxIndex}}`)
    return binarySearch(numSlice, target);
  }

};

// TEST SUITE
// console.log(`Test #1: ${binarySearch([], 20)}`);                              // ---> Error001
// console.log(`Test #2: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20)}`); // ---> Error002
// console.log(`Test #3: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)}`);  // ---> undefined
// console.log(`Test #4: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)}`);  // ---> FIRST
console.log(`Test #5: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)}\n`);  // ---> less than index range: 0, 4
console.log(`Test #6: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)}`);  // ---> greater than index range: 6, 9
