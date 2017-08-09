
/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */
const quickSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }
  let pivot = nums[0];
  let lesser = [];
  let greater = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) {
      lesser.push(nums[i]);
    } else {
      greater.push(nums[i]);
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater));
};