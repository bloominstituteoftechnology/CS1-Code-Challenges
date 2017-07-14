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
    const checker = new Set();
    let answer = [];
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
      checker.add(arr[i]);
      if (checker.size === temp) answer.push(arr[i]);
      // console.log('size',checker.size, 'temp', temp, 'bool', checker.size === temp);
      temp += 1;
    }
    if (answer.length === 0) return null;
    return answer[0];
  // Your code here.
};

const tester = [1,2,2,22,3,44,23,12,22,4];
console.log(evenOccurence(tester)); //should be 22
