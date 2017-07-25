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
  let newObj = {};
  arr.forEach(num => {
    newObj[num] = newObj[num] + 1 || 1;
  });
  
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    
    if (newObj[current] % 2 === 0) {
      return current;
    }
  }
  return null;
};



console.log(evenOccurence([1,7,2,4,5,1,6,8,9,6,4,1]));