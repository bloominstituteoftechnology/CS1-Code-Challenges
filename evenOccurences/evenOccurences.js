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
    let ans;
    arr.forEach((elem, i) => {
      let result = 0;
      // go thru array, get count of matches for element.
      // increment result for each match
      arr.forEach((itemFound) => {
        if (itemFound === elem) result += 1;
      });
      if (result > 1 && result % 2 === 0 && ans === undefined) {  //undefined so it will stop when
                                                                  // it finds first answer
        ans = elem;
      }
    });
    if (ans) return ans;
    // no even matches found return null
    return null;
  };

  const onlyEven = evenOccurence([1, 7, 2, 4, 5, 4, 5, 8, 9, 61, 13, 115]);
  console.log(`${onlyEven}`);


  /* official answer but my code works fine


const evenOccurence = (arr) => {
  // Your code here.
  const obj = {};
  let first;
  arr.forEach((item) => {
    if (obj[item] === undefined) return obj[item] = 1;
    if (obj[item] === 1) return obj[item] = 2;
    if (obj[item] === 2) return obj[item] = 1;
  });
  arr.forEach((item) => {
    if(obj[item] === 2 && first === undefined) first = item;
  });
  if (first) return first;
  return null;
};

const onlyEven = evenOccurence([1, 7, 2, 4, 5, 4, 5, 8, 9, 6, 4]);
console.log(onlyEven); //  4  */
