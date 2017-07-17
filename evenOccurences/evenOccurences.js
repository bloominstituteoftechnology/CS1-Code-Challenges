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

/*   *First: store the values from the array
*      * loop through the stored values until it finds another occurence
*      * if statement checks to see if the occurence is even
*        * return null if no occurences are even
*        */
const evenOccurence = (arr) => {
  // store counts
  const storage = {};
  // store each value within the storage object to keep count
  arr.forEach(function(value, index) {
    // using || sets the value for the first iteration
    storage[value] = storage[value] + 1 || 1;
  });
  // loop through the array to find the even occurence
  for (let i = 0; i < arr.length; i ++) {
    const currentValue = arr[i];

    if (storage[currentValue] % 2 === 0) {
      return currentValue;
    }
  }
  return null;
};

console.log(evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]));