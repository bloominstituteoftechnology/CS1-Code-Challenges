/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const rEVCASE = (str) => {
  let rEVSTR = '';
  for (let i = 0; i < str.length; i++) {
    if(str[i].toUpperCase() === str[i]) {
      rEVSTR = rEVSTR.concat(str[i].toLowerCase());
    } else {
      rEVSTR = rEVSTR.concat(str[i].toUpperCase());
    }
  }
  return rEVSTR;  
}

console.log(rEVCASE('PiNeApPlEs'));