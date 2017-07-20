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
  if (nums.indexOf(target) === -1) return "Error001: target number not in array";
};

// TEST SUITE
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20)); // ---> Error001
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
