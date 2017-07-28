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
    console.log(arr, modify);
  }
  return arr;
};


console.log('TEST01: ', bubbleSort([ 2, 1, 3 ])) // ---> [ 1, 2, 3 ]
console.log('TEST02: ', bubbleSort([ 2, 1, 5, 4, 3 ])) // --->



// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let modify = 0;
//     let current = arr[i];
//     let next = arr[i + 1];
//     while (next !== undefined) {
//       console.log(`BEFORE: current index value: ${current}; next index: ${next}`);
//       if (next < current) {
//           arr[i] = next;
//           arr[i = 1] = current;
//           console.log(`AFTER: current index value: ${current}; next index: ${next}`);
//           modify++;
//       }
//     if (modify !== 0) {
//       // bubbleSort(arr);
//       console.log('more to sort', arr)
//     }
//     }
//   } return arr;
// };
