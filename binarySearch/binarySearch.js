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

const binarySearch = (nums, target) => {
  let min = 0;
  let max = nums.length - 1;
  let average = ((min + max) / 2);
  let guess = Math.floor(average);
  while (nums[guess] !== target) {
    if (nums[guess] < target) {
      min = guess + 1;
    } else if (nums[guess] > target) {
      max = guess - 1;
    }
    guess = Math.floor((min + max) / 2);
  }
  return nums[guess];
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));