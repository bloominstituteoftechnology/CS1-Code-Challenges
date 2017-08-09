// cc22 quickSort
/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */
const quickSort = (nums) => {
  if (nums.length < 2) { // BASE CASE
    return nums;
  }
  // const pivot = nums[Math.floor(nums.length / 2)],
  const pivot = nums[0],
        lessThan = [],
        greaterThan = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      lessThan.push(nums[i]);
      // console.log('less than array: ', lessThan)
    } else greaterThan.push(nums[i]);
      // console.log('GRTR than array: ', greaterThan)
  };
  // console.log(lessThan, pivot, greaterThan)
  return quickSort(lessThan).concat(quickSort(greaterThan));
};


// TEST SUITE

// const x = [1,2,3],
//       y = 4
//       z = [5,6,7];
// console.log(x.concat(y, z));

// console.log(quickSort([ 9, 8, 7, 555, 632, 345, 4, 3, 2, 1]));
console.log(quickSort([ 4, 5, 6, 3, 2 ]));
