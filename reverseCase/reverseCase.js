/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
<<<<<<< HEAD

reverseCase = (string) => {
  const reversed = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()){
      reversed.push(string[i].toLowerCase());
    } else {
    reversed.push(string[i].toUpperCase());
    }
  }
  return reversed.join('');
}

console.log(reverseCase('Hello World'));
=======
>>>>>>> 16c30f05fda2a6621522f580bcc60d0ea35e639e
