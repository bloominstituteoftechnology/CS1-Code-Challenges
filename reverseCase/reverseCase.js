/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
const newString = [];

const lowerUpper = (string) => {
  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    if (character === character.toLowerCase()) {
      newString.push(character.toUpperCase());
    } else if (character === character.toUpperCase()) {
      newString.push(character.toLowerCase());
    }
  }
  // join() joins the elements of an array into a string
  // since it caused commas inbetween each letter, Quotes fixed the issue
  return newString.join('');
}

console.log(lowerUpper('Hello World'));