/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = (str) => {
  let newString = '';
  for(let i = 0; i < str.length; i++) {
  	let character = str.charCodeAt(i);
    if((character >= 65) && (character <= 90)) {
    	newString = newString + (str.charAt(i).toLowerCase());
    } else if((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 122)) {
    	newString = newString + (str.charAt(i).toUpperCase());
    } else {
    newString = newString + ' ';
  }
}
  return newString;
}

