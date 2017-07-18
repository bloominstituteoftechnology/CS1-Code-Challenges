/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
<<<<<<< HEAD

function reverseCase (str) {
  let reversed = '';

  for (s of str) {
    reversed += s.toLowerCase() === s ? s.toUpperCase() : s.toLowerCase();
  }

  return reversed;
}
=======
>>>>>>> 16c30f05fda2a6621522f580bcc60d0ea35e639e
