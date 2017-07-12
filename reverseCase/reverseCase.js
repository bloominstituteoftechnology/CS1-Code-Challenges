/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = (str) => {
  starr = str.split('');
  for (let i = 0; i < starr.length; i++) {
    if (starr[i].charCodeAt(0) >= 65 && starr[i].charCodeAt(0) <= 90) {
      starr[i] = starr[i].toLocaleLowerCase();
    } else if (starr[i].charCodeAt(0) >= 97 && starr[i].charCodeAt(0) <= 122) {
      starr[i] = starr[i].toUpperCase();
    }
  }
  return starr.join('');
}

console.log(reverseCase("Hello World"));