
/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */
const quickSort = (nums) => {

  const shuffle = () => {
    for (let i = nums.length; i > 1; i--) {
      const r = random(i);
      if (r < i - 1) {
        exch(r, i-1);
      }
    }
  }

  const random = (pos) => {
    return Math.floor(Math.random() * pos);
  }

  const exch = (a, b) => {
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }

  const less = (x, y) => {
    return x <= y;
  }

  const partition = (lo, hi) => {
    let i = lo, j = hi + 1, pivot = nums[lo];

    while (true) {

      while (less (nums[i], pivot)) {
        i++;
        if (i === hi) break;
      }

      while (less (pivot, nums[--j])) {
        if (j === lo) break;
      }

      if (i >= j) break;

      exch(i, j);
    }
    
    exch(lo, j);
    return j;
  }

  const qsort = (lo, hi) => {
    if (hi <= lo) return;
    const j = partition(lo, hi);
    qsort(lo, j - 1);
    qsort(j + 1, hi);
  }

  console.log(`start:    ${nums}`);
  shuffle(nums);
  console.log(`shuffled: ${nums}`);
  qsort(0, nums.length - 1);
  return nums;
};

const arr = [0,1,2,3,4,5,6,7,8,9];
const qarr = quickSort(arr);
console.log(`sorted:   ${qarr}`);
