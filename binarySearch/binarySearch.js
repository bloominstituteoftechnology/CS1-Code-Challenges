/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * */

/**
 *  * const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 *	* console.log(index); // 1
**/

const binarySearch = (nums, target) => {
  let minIndex = 0;
  let maxIndex = nums.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = currentIndex;

    if (currentElement < target) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > target) {
      maxIndex = currentIndex - 1;
    }
    else {
			return currentIndex;
    }
  }
  return -1;
};

 const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 console.log(index); // 1