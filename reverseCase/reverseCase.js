/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const rEVCASE = (str) => {
  let rEVSTR = str;
  for (let i = 0; i < str.length; i++) {
    if(rEVSTR[i].toUpperCase() === rEVSTR[i]) {
      rEVSTR[i] = rEVSTR[i].toLowerCase();
    }
    rEVSTR[i] = rEVSTR[i].toUpperCase();
  }
  return rEVSTR;  
}

console.log(rEVCASE('PiNeApPlEs'));
