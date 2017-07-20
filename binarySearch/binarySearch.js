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
  let start = 0;
  let end = nums.length - 1;
  
  while(start <= end) {
    let mid = (Math.floor((start + end) / 2));
    if(nums[mid] === target) {
      return mid;
    } else if(target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
console.log(index);
