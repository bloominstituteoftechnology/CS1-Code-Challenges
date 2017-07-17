/*
 *  * Find the first item that occurs an even number of times in an array.
 *   * Remember to handle multiple even-occurance items and return the first one.
 *    * Return null if there are no even-occurance items.
 *    */

/*
 *  * example usage:
 *   * const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
 *    * console.log(onlyEven); //  4
 *    */

const evenOccurence = (arr) => {
const times = {};
arr.forEach(occ => {
  times[occ] = (times[occ] || 0) +1
});
for (var key in times) {
    if (times[key] % 2 === 0) {
      return Number(key);
    }
}
}


