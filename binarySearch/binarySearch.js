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
// const binarySearch = (nums, target) => {
//   function bSearch(nums, target, low, high) {
//     if (high === low) {
//       return low;
//     }
//     let mid = Math.ceil((low + high)/2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//      if (low === mid) {
//        return false;
//       else {
//         return bSearch(nums, target, mid + 1, high);
//       } 
//     } if (nums[mid] > target) {
//      if (high = mid) {
//        return false;
//       else {
//         return bSearch(nums, target, low, mid - 1)
//       }
//     }
//   }
//   if (nums.length === 0) {
//     return false;
//   } else {
//     return bSearch(nums, target, 0, nums.length - 1);
//   }
// };

const binarySearch = (nums, target) => {
  function bSearch(nums, target, low, high) {
    if (target === nums[low]) {
      return low;
    }
    if (nums[high] === target){
      return high;
    }
    let middle = Math.floor((low + high) / 2);
    let middleElement = nums[middle];
    if (target === middleElement) {
      return middle;
    } else if (target > middleElement) {
      return bSearch(nums, target, middle, high-1);
    } else if (target < middleElement) {
      return bSearch(nums, target, low+1, middle);
    }
  }
  return bSearch(nums, target, 0, nums.length-1);
};


 const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 console.log(index); // 1
