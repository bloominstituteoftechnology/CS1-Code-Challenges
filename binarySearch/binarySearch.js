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
// PRESUMES SORTED ARRAY
const binarySearch = (nums, target) => {
  const min = nums[0];
  const max = nums[nums.length - 1];
  let odd;
  let even;
  if (nums.length % 2 === 0) {
    even = nums.length;
  } else { odd = nums.length; }
  console.log(`{ Minimum: ${min}, Maximum: ${max}, Odd: ${odd}, Even: ${even} }.`)
  let rangeMin = 1;
  let rangeMax = max; // NOT SURE IF THIS IS WHAT I WANT CUZ VAR <==> VAR relation???
  console.log(`{ Minimum: ${min}, Maximum: ${max}, Odd: ${odd}, Even: ${even},\n\tRANGE: {rangeMin: ${rangeMin}, rangeMax: ${rangeMax}} }.`)
  let guess = Math.floor((Math.random() * rangeMax) +1);
  console.log(`First guess: ${guess}`);
  if (guess = nums.indexOf(target)) return guess;
  // Hi / Low guess
  
  if (even) {
    guess =
  } else {
     =
  }
};

// TEST SUITE
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
