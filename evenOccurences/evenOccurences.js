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
const testData = [1,2,3,4,5,6,7,8,9,2,3,4,5,6];

const evenOccurence = (arr) => {
  let values = {};
  arr.forEach((v, i) => {
    values[v] = values[v] + 1 || 1;
  });
  for (let i = 0; i < arr.length; i++) {
    let now = arr[i];
    if(values[now] % 2 === 0) {
      return now;
    }
  }
  console.log(values);
  return null;
};

console.log(evenOccurence(testData));
