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

  //

const evenOccurence = (arr) => {
  // Your code here.

  arr.forEach((elem, i) => {
    let result = 0;
    while ((arr.indexOf(elem, i + 1)) !== -1){  // getting all matces to the element in the array,not working
        result ++;
        ++i;
        console.log(`pat ${elem} ${i}`);
    }
    console.log(`the result is ${result}`);
    if (result > 0 && result % 2 == 0) {
      return  elem;
    }
  });
  // no even matches found return null
  return null;
};

const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
console.log(`finala finala result ${onlyEven}`);
