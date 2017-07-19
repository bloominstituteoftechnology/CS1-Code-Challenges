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
  // used holds values that have been counted so they are not recounted
  const used = new Set();
  
  // use find() to find the first array element that occurs an even number of times in the array
  let first = arr.find((e, i) => {
    if (i === arr.length - 1) return false; // no need to check the last item
    if (used.has(e)) return false; 	    // skip if the number has already been counted

    // use reduce() to count occurrences
    const total = arr.slice(i + 1).reduce((t, a) => { return a === e ? ++t : t }, 1);
    if (!(total % 2)) return true; // ANSWER

    used.add(e);
    return false // continue searching
  });

  return first === undefined ? null : first;
};


const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
console.log(onlyEven);

const onlyEven2 = evenOccurence([10,9,8,7,6,5,4,3,2,1,10,1,1]);
console.log(onlyEven2);
