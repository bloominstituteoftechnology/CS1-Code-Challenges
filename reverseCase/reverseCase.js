/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

function reverseCase (str) {
  let reversed = '';

  for (s of str) {
    reversed += s.toLowerCase() === s ? s.toUpperCase() : s.toLowerCase();
  }

  return reversed;
}
