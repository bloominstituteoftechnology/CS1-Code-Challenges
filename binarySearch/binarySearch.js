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
    var min = 0;
    var max = nums.length - 1;
    var guess;
 
    while (min <= max) {
        guess = Math.floor((min + max) / 2);
 
        if (list[guess] === target) {
            return guess;
        }
        else {
            if (list[guess] < target) {
                min = guess + 1;
            }
            else {
                max = guess - 1;
            }
        }
    }
 
    return -1;
};
