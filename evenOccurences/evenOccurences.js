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
  // Your code here.
  const obj = {};
  const occurences = [];
  arr.forEach((value) => {
    if (obj[value]) {
      obj[value]++;
    } else {
      obj[value] = 1;
    }
  });
  Object.keys(obj).forEach((key) => {
    if (obj[key] % 2 === 0) {
      occurences.push(key);
    }
  });
  if (occurences.length > 0) {
    return occurences[0];
  }
  return null;
};
