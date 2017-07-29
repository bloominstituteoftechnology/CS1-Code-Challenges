// Code Challenge # 15

const bubbleSort = (arr, mod = 0) => {

  // compare (current/next) second pairs per each index
  for (let i = 0; i < arr.length; i++) {
    // counter to track if sorting is done
    let modify  = mod;
    let current = arr[i];
    let next    = arr[i + 1];

    // if current is greater than next, swap & increment modification counter
    // else, reset modification counter to zero to prevent recursive call
    if (current > next) {
      arr[i] = next;
      arr[i + 1] = current;
      modify++;
    } else modify = 0;

    // if list not sorted,
    if (modify !== 0) {
      // // UNCOMMENT TO CONSOLE.LOG() EACH PASS
      // if (modify > 9) {
      //   console.log(`Sorting pass #${modify}:  ${arr}`);
      // } else {
      //   console.log(`Sorting pass  #${modify}:  ${arr}`);
      // }

      // ...then recursively call function until modify count is 0
      bubbleSort(arr, modify)
    }
  };

  // return sorted array
  return arr;
};

const test1 = [ 2, 1, 3 ];
console.log(`TEST #1 UNSORTED:  ${test1}`);
console.log(`TEST #1   SORTED:  ${bubbleSort(test1)}\n`);
// ---> [ 1, 2, 3 ]
const test2 = [ 3, 2, 1, 3, 1, 5, 4, 3 ];
console.log(`TEST #2 UNSORTED:  ${test2}`);
console.log(`TEST #2   SORTED:  ${bubbleSort(test2)}\n`);
// ---> [ 1, 1, 2, 3, 3, 3, 4, 5 ]
const test3 = [ 102345, 99, 34, 87, 135, 8, 3, 7, 99, 101, 3657, 2, 1, 5, 4, 3 ];
console.log(`TEST #3 UNSORTED:  ${test3}`);
console.log(`TEST #3   SORTED:  ${bubbleSort(test3)}`);
// ---> [ 1, 2, 3, 3, 4, 5, 7, 8, 34, 87, 99, 99, 101, 135, 3657, 102345 ]
