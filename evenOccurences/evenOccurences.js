/*
* Find the first item that occurs an even number of times in an array.
  * Remember to handle multiple even-occurance items and return the first one.
  * Return null if there are no even-occurance items.
* example usage:
  * const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
  * console.log(onlyEven); //  4
 */

// I: array
// F(): isUnique false return, then check total number of times
//      item is in array, %2 === 0 dun, or check next until null
// O: array item - first instance of item which occurs even # of times in array
const evenOccurence = (arr) => {

  // I: array
  // O: if (isUnique(array)) ? uniqueArrayItem : null
  const isUnique = (str) => { // <----- works fine for arrays
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        // console.log(`Q: does ${str[i]} === ${str[j]}? A: ${str[i] === str[j]}`)
        if (str[i] === str[j]) {
          return str[i];
        }
      }
    }  return null;
  };
// // isUnique TEST SUITE:
// console.log(isUnique('abcdhijklmnopqrstuv')); // true
// console.log(isUnique('abcdefghijklmnopqrstuvwyz')); // true
// console.log(isUnique('abcdefga')); // false
// console.log(isUnique('bcdgefga')); // false
// console.log(isUnique([1, 2, 3, 4, 5, 6, 3])); // false
// console.log(isUnique([0, 1, 2, 3, 4, 6, 7, 8, 9, 9])); // false

  // I: array
  // O: 1st item that occurs an even number of times in an array
  const countNotUnique = (item, anArrayOfItems) => {
    const hold  = [];
    if (!isUnique(item)) {
      for (let i = 0; i < anArrayOfItems.length; i++) {
        if (anArrayOfItems[i] === item) {
          hold.push(item);
        }
      }
    }
    const count = hold.length;
    if ((count === 0) || (count % 2 !== 0)) {
      console.log(`no dupes || odd # of dupes`);
    }
    console.log(`${anArrayOfItems} has ${count} many instances of ${item}: ${hold}`)
  }
// countNotUnique TEST SUITE:
countNotUnique(1, [5, 1, 1, 1, 1]); // <---------------------- 4 instances of 1
countNotUnique(1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // <--- no dupes >>> null
countNotUnique(1, [5, 1, 1, 1, 6]); // <---------------------- odd dupes >> null

};

evenOccurence();
// console.log(evenOccurence([1, 2, 3, 4, 5, 6, 3]));
