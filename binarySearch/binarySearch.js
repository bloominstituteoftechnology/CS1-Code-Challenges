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

// binarySearch returns index of target number or -1 on failure
const binarySearch = (nums, target) => {

  const min = 0;
  const max = nums.length;
  const index = Math.floor((max - min) / 2);

  // next index downward
  const nextDown = (i) => {
    if (i === min) return -1;
    return Math.floor((i - min) / 2);
  };

  // next index upward
  const nextUp = (i) => {
    if (i === (max - 1)) return -1;
    return i + Math.floor((max - i) / 2);
  }

  const bs = (i) => {
    if (i === -1) return -1;
    if (nums[i] === target) return i;
    if (nums[i] > target) return bs(nextDown(i));
    return bs(nextUp(i));
  };

  return bs(index);
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(nums, 2));
console.log(binarySearch(nums, 1));
console.log(binarySearch(nums, 10));
console.log(binarySearch(nums, 0));
console.log(binarySearch(nums, 11));
