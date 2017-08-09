// cc22 quickSort
/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */
const quickSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }
  // console.log(nums)

  const pivot = nums[0]
  let lessThan = [];
  let greaterThan = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      lessThan.push(nums[i]);
      // console.log('less than array: ', lessThan)
    } else {
      greaterThan.push(nums[i]);
      // console.log('GRTR than array: ', greaterThan)
    }
  };
  return quickSort(lessThan).concat(pivot, quickSort(greaterThan));
};

// TEST SUITE
// console.log(quickSort([ 9, 8, 7, 555, 632, 345, 4, 3, 2, 1]));
console.log(quickSort([ 9, 8, 7, 555, 632 ]));
