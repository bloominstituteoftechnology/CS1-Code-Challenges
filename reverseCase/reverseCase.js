/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 const reverseCase = str => {
  let i = 0;
  const charArray = [];
  while (i <  str.length) {

    let char = str.charAt(i);
    if (char === ' ') {
      charArray.push(char);
    }
    else if (char === char.toUpperCase()) {
      char = char.toLowerCase();
      charArray.push(char);
    }
    else {
    charArray.push(char.toUpperCase());
    }
    i++;
  }
  return charArray.join('');
}

console.log(reverseCase('Hello World')); // --> "hELLO wORLD"
console.log(reverseCase('ely alamillo')); // --> "ELY ALAMILLO"
console.log(reverseCase('ELY ALAMILLO')); // -->"ely alamillo"
