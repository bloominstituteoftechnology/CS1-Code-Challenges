/*
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */

const isUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    //console.log(splitStr[i]);
    let temp = str[i];
    for (let j = 1; j < str.length; j++) {
      if(temp === str[j]) {
        return false;
      }
    }
  return true;
  }
};

//const isUnique = (str) => {
//  const splitStr = [str.split('')];
//  const uniqueStr = [];
//  for (let i = 0; i < splitStr; i++) {
//    if (!(splitStr[i] in uniqueStr)) {
//      uniqueStr.push(splitStr[i]);
//    }
//  }
//  console.log(uniqueStr.length, splitStr.length);
//  if (splitStr.length == uniqueStr.length) {
//    return true;
//  } 
//  return false;
//}

console.log(isUnique('abcdhijklmnopqrstu')); //true
console.log(isUnique('abcdefga')); //false

