/* mergeSort
 *
 * https://github.com/LambdaSchool/DevOps-Deployment.git
 *
 * Sort an array of integers using the merge sort algorithm.
 *
 * First divide the list into its  smallest unit (arrays with a single
 * item in them)
 *
 * Then compare each  element with the adjacent list  and combine them
 * in the proper order.
 *
 * Repeat until the entire array is sorted.
 *
 * Example:
 * - Input: [1, 6, 3, 2, 4, 7]
 * - Expected Output: [1, 2, 3, 4, 6, 7];
 * [1, 6, 3, 2, 4, 7] -> [1, 2, 3, 4, 6, 7]
 *
 */

function mergeSort(arr) {

  const splitMerge = (arr1, i, k) => {
     if (k - i < 2) return arr1;
    const j = Math.floor((k + i) / 2);

    arr1 = splitMerge(arr1, i, j);
    arr1 = splitMerge(arr1, j, k);
    return merge(arr1, i, j, k);
  }

  const merge = (arr2, begin, middle, end) => {
    const arr3 = Array.from(arr2);
    let i = begin, j = middle;
    for (let k = begin; k < end; k++) {
      if (i < middle && ( j >= end || arr2[i] <= arr2[j])) {
        arr3[k] = arr2[i];
        i++;
      } else {
        arr3[k] = arr2[j];
        j++;
      }
    }
    return arr3;
  }

  return splitMerge(arr, 0, arr.length);
};


console.log(mergeSort([1,6,3,2,4,7]));
