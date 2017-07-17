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
   let numberStorage = {};
   arr.forEach((number) => {
     if (numberStorage[number]) {
       numberStorage[number] = numberStorage[number]+1
     } else {
       numberStorage[number] = 1;
     }
   })
   for (let i = 0; i < arr.length; i++) {
     let currentNumber = arr[i];
     if (numberStorage[currentNumber] % 2 === 0) {
       return currentNumber;
     }
   }
   return null;
 };
 const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
 console.log(onlyEven);
