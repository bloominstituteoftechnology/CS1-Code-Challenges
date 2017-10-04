
/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */
const quickSort = (nums) => {
  if (nums.length === 0) return [];
  const left = [];
  const right = [];
  let pivot = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    }
    else {
      right.push(nums[i]);
    }
  }
  // console.log('left: '+left);
  // console.log('right: '+right);
  // console.log('*****************************')
 return quickSort(left).concat(pivot, quickSort(right));
};

const nums = [9, 4, 7, 8, 1, 3, 2, 5];
console.log(quickSort(nums));
