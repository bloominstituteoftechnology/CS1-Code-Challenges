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
  console.log(nums, target);
  if (nums.length < 1) return "Error001: empty array";
  if (nums.indexOf(target) === -1) return "Error002: target number not in array";
  if (nums.length === 1 && nums[0] === target) return `MATCH! I don't know the original index.`;
  // INDEX RANGE
  const range = {};
  range.min = 0;
  range.max = nums.length - 1;
  // console.log(`Index range: {min: ${range.min}, max: ${range.max}}`)
  console.log(range);

  // High or Low check
  // CHECK THE "MIDDLE" INDEX
  let half = Math.floor((range.min + range.max) / 2)
  let guess = nums[half]
  // console.log(`GUESSING target value: ${target} is at index: nums[${guess}]`)
  if (target === guess)
    return `MATCH! The value at nums index position [${guess}] is: ${nums[guess]}`;

  // GUESS LESS THAN TARGET
  if (nums[guess] < target) {
    range.min = guess + 1;
    console.log(`LESS THAN { index: ${guess}, value ${nums[guess]} } in { range: {min: ${range.min}, max: ${half}} }`)
    // let numSlice = nums.slice(min, max);
    // // console.log(`Target is LESS THAN value at index:  nums[${guess}]:  new index range {min: ${min}, max: ${max}}`)
    return binarySearch(nums.slice(range.min, range.max), target);
  // GUESS GREATER THAN TARGET?
  } else {
    range.max = guess - 1;
    // let numSlice = nums.slice(half + 1);
    // max = numSlice.length -1;
    // half = Math.floor(max / 2)
    // // console.log(numSlice);
    // guess = numSlice[half];
    // // console.log(half);
    // // console.log(`Target is GREATER THAN value at index: nums[${guess}]: new index range {min: ${min}, max: ${max}}`)
    // return binarySearch(numSlice, target);
    return binarySearch(nums.slice(range.min, range.max), target);
  }
};

// // TEST SUITE
// // console.log(`Test #1: ${binarySearch([], 20)}`);                              // ---> Error001
// // console.log(`Test #2: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20)}`); // ---> Error002
// // console.log(`Test #3: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)}`);  // ---> undefined
// // console.log(`Test #4: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)}`);  // ---> FIRST
// // console.log(`Test #5: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)}\n`);  // --->
console.log(`Test #0: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)}\n`);
console.log(`Test #1: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)}\n`);
console.log(`Test #2: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)}\n`);
console.log(`Test #3: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)}\n`);
console.log(`Test #4: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)}\n`);
console.log(`Test #5: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)}\n`);
console.log(`Test #6: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)}\n`);
console.log(`Test #7: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)}\n`);
console.log(`Test #8: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8)}\n`);
console.log(`Test #9: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)}\n`);
console.log(`Test #10:${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)}\n`);
console.log(`Test #11:${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)}\n`);
