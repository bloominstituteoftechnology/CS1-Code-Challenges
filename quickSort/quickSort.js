
/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */
const quickSort = (nums, sort) => {
    const length = nums.length;
    
    if(!sort) {
        sort = (a, b) => {
            return a > b;
        };
    }
    if(length === 0 || length === 1) {
        return nums;
    }

    var swapLeft = [];
    var swapRight = [];
    var pivot = nums[0];

    for(let i = 1; i < length; i++) {
        if(sort(nums[i], pivot)) {
            swapRight.push(nums[i]);
        } else {
            swapLeft.push(nums[i]);
        }
    }
    return quickSort(swapLeft).concat(pivot, quickSort(swapRight));
};


console.log(quickSort([66, 646,323, 484, 4, 8, 99, 656, 26, 5])); // [ 4, 5, 8, 26, 66, 99, 323, 484, 646, 656 ]
console.log(quickSort([46, 646, 99, 26, 5])); // [ 5, 26, 46, 99, 646 ]
console.log(quickSort([8])); // [8]
console.log(quickSort([])); // []