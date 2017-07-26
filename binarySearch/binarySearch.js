const binarySearch = (nums, target) => {
  let min = 0;
  let max = nums.length - 1;
  let guess;
  while(max > min) {
    guess = Math.floor((min + max) / 2);
    if (guess === target) return nums.indexOf(guess);
    else if (guess < target) min = guess + 1;
    else max = guess - 1;
  }
  return -1;
};

const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
index;
