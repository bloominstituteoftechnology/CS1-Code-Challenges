const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let modify = 0;
    let current = arr[i];
    let next = arr[i + 1];
    while (next !== undefined) {
      console.log(`BEFORE: current index value: ${current}; next index: ${next}`);
      if (next < current) {
          arr[i] = next;
          arr[i = 1] = current;
          console.log(`AFTER: current index value: ${current}; next index: ${next}`);
          modify++;
      }
    if (modify !== 0) {
      // bubbleSort(arr);
      console.log('more to sort', arr)
    }
    }
  } return arr;
};

console.log(bubbleSort([ 2, 1, 3 ]))
