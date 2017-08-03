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
  const occurences = {};
  const evenOccurences = [];
  // Make an object/dictionary
  arr.forEach(function(element) {
    if (occurences[element] === undefined) {
      occurences[element] = 0;
    }
    occurences[element]++;
    console.log(occurences);
  });
  // Separate even and odd occurences
  Object.keys(occurences).forEach(function(element) {
    if ((occurences[element] % 2) === 0) {
      evenOccurences.push(element);
    }
  });
  // return 1st in even array
  return evenOccurences[0];
};
// console.log(evenOccurence([])); //undefined
// console.log(evenOccurence([1, 2, 3])); //undefined
// console.log(evenOccurence([1, 2, 1, 2, 1])); //2
// console.log(evenOccurence([1, 2, 1, 2, 3])); //1
const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
console.log(onlyEven); //  4
