/*
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */

const selectionSort = (arr) => {

  const exch = (i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    exch(i, min);
  }

  return arr;
};

const randomize = (arr) => {
  for (let i = arr.length; i--; i > 1) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

const r_arr = randomize([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(r_arr);
const s_arr = selectionSort(r_arr);
console.log(s_arr);
