// import { binarySearch } from '../binarySearch/binarySearch';
/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(n))
 */

const rotated = (arr, searchVal) => {
  let smIndex = 0;
  let smVal = arr[smIndex];
  let lgIndex = smIndex - 1;
  let lgVal = arr[lgIndex];
  const beginVal = arr[0];
  const endVal = arr[arr.length - 1];
  // establish smallest (and therefore also largest) value
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smVal) {
      smVal = arr[i];
      smIndex = i;
    }
  }
  // divide array into 2 arrays
  const lgHalf = arr.slice(0, smIndex);
  const smHalf = arr.slice(smIndex, arr.length-1);
  // binary search through appropriate half of array
  if (searchVal >= beginVal && searchVal <= lgVal) {
    // binary search lgHalf
    return binarySearch(lgHalf, searchVal);
  } else if (searchVal >= smVal && searchVal <= endVal) {
    // binary search smHalf
    return binarySearch(smHalf, searchVal);
  } else {
    // must not be in the array
    return null;
  }
};

const binarySearch = (nums, target) => {
  function bSearch(nums, target, low, high) {
    if (target === nums[low]) {
      return low;
    }
    if (nums[high] === target) {
      return high;
    }
    let middle = Math.floor((low + high)/2);
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

console.log(rotated([4, 5, 6, 0, 1, 2, 3], 2));
//console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 2));
