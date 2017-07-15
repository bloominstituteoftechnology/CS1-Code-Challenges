/*
* Find the first item that occurs an even number of times in an array.
  * Remember to handle multiple even-occurance items and return the first one.
  * Return null if there are no even-occurance items.
* example usage:
  * const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
  * console.log(onlyEven); //  4
 */

// I: array
// F(): if isUnique is false, then return null, then check total number of times
//      item is in array, %2 === 0 dun, or check next until null
// O: array item - first instance of item which occurs even # of times in array
const evenOccurence = (arr) => {

  // I: array
  // O: if (isUnique(anArray)) ? 1st unique array item : null
  const isUnique = (anArray) => {
    if (anArray === null) /* console.log(`That's some kinda ${anArray} isUnique array there`); */ return null;
    // console.log(anArray);
    // console.log(`${anArray} ...next stop is the for loop:`);
    for (let i = 0; i < anArray.length; i++) {
      for (let j = i + 1; j < anArray.length; j++) {
        // console.log(`Q: does ${anArray[i]} === ${anArray[j]}? A: ${anArray[i] === anArray[j]}`)
        if (anArray[i] === anArray[j]) {
          return anArray[i];
        }
      }
    }  return null;
  };

  // I: array
  // O: 1st item that occurs an even number of times in an array
  const countNotUnique = (item, anArrayOfItems) => {
    if (item === null) /* console.log(`That's some kinda ${item} item`); */ return null;
    if (anArrayOfItems === null) console.log(`That's some kinda ${anArrayOfItems} anArrayOfItems array there`); // return null;
    const hold  = [];
    if (!isUnique(item)) {
      for (let i = 0; i < anArrayOfItems.length; i++) {
        if (anArrayOfItems[i] === item) {
          hold.push(item);
        }
      }
    }
    return hold;
  }

  const oddOrEven = (dupesArray) => {
    if (dupesArray === null) /* console.log(`That's some kinda ${dupesArray} oddOrEven array`); */ return null;
    const count = dupesArray.length;
    if ((count === 0) || (count % 2 !== 0)) {
      /* console.log(`no dupes || odd # of dupes`); */return null;
    }
    console.log(`The holding array for duplicates has ${count} instances of ${dupesArray[0]}: ${dupesArray}`)
    return dupesArray[0]
  }

  return oddOrEven(countNotUnique(isUnique(arr), arr));

};

// evenOccurence TEST SUITE:
// evenOccurence();
console.log(`Invoking evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1])}: ${evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1])}`);
evenOccurence([5, 1, 1, 1, 1]); // <------------------------ 1 x4 >>> 1
evenOccurence([1, 2, 3]) // <------------------------------- null
evenOccurence([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // <----- null
evenOccurence([5, 1, 1, 1, 6]); // <--------------- 1 x3 >>> null
evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]); // <--- 4 x2 >>> 4
