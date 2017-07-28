const bubbleSort = (arr) => {
  // mod var to track if sorting done
  let modify = 0;
  // compare first/second pairs per each index - maybe current/next is a better name?
  for (let i = 0; i < arr.length; i++) {
    // compare first array element to second
    let first = arr[i];
    let second = arr[i + 1];
    // swap if 1st is greater than 2nd
    if (first > second) {
      arr[i] = second;
      arr[i + 1] = first;
      modify++;
    }
    // console.log(arr, modify);
    if (modify !== 0) {
      bubbleSort(arr)
    }
  }
  return arr;
};


console.log('TEST01: ', bubbleSort([ 2, 1, 3 ])) // ---> [ 1, 2, 3 ]
console.log('TEST02: ', bubbleSort([ 2, 1, 5, 4, 3 ])) // ---> [ 1, 2, 3, 4, 5 ]
console.log('TEST03: ', bubbleSort([ 99, 34, 87, 135, 8, 3, 7, 99, 101, 102345, 3657, 2, 1, 5, 4, 3 ])) // ---> [ 1, 2, 3, 4, 5 ]
