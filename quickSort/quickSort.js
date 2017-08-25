
/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */
const quickSort = (nums) => {
  const len =nums.length;
  const pivot = nums[len-1];
  const right = [];
  const left = []; 
  let sortedArray=[];
  
  if(len <= 1){
    return nums;
  } else {
    
    for(let i = 0; i < len-1; i++) {
      if(nums[i] <= pivot) {
        left.push(nums[i]);
      } else {
         right.push(nums[i]);
      }
    }
    return sortedArray.concat(quickSort(left), pivot, quickSort(right));
  }
};

const myArray = [1, 0, 2, 5, 7, 9, -1 ];

console.log("Original array: " + myArray);
let sortedArray = quickSort(myArray);
console.log("Sorted array: " + sortedArray);