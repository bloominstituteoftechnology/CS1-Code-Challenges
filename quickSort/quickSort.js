
/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */
const quickSort = (array) => {
  const qSort = (array, p, r) => {
      if(p < r) {
          var q = partition(array, p, r);
          qSort(array, p, q - 1);
          qSort(array, q + 1, r);
      }
  };
  qSort(array, 0, array.length - 1);
  return array;
};
const swap = (array, firstIndex, secondIndex) => {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};
const partition = (array, p, r) => {
    // Compare array[j] with array[r], for j = p, p+1,...r-1
    // maintaining that:
    //  array[p..q-1] are values known to be <= to array[r]
    //  array[q..j-1] are values known to be > array[r]
    //  array[j..r-1] haven't been compared with array[r]
    // If array[j] > array[r], just increment j.
    // If array[j] <= array[r], swap array[j] with array[q],
    //   increment q, and increment j.
    // Once all elements in array[p..r-1]
    //  have been compared with array[r],
    //  swap array[r] with array[q], and return q.
    let q = p;
    for (let j = q; j < r; j++) {
        if (array[j] <= array[r]) {
            swap(array, j, q);
            q++;
        }
    }
    swap(array, r, q);
    return q;
};
const arr1 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
console.log(quickSort(arr1));
