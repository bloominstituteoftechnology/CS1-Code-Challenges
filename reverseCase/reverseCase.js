/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = (str) => {
  const strArray = [];
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
      strArray.push(str.charAt(i).toLowerCase());
    } else {
      strArray.push(str.charAt(i).toUpperCase());
    }
    newString += strArray[i];
  }
  return newString;
};
