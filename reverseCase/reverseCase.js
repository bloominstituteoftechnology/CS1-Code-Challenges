/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
<<<<<<< HEAD

const isUpper = (ch) => {
  const code = ch.charCodeAt(0);
  if (code >=65 && code <= 90) return true;
  return false;
}
const isLower = (ch) => {
  const code = ch.charCodeAt(0);
  if (code >=97 && code <= 122) return true;
  return false;
}
const reverseCase = str => {
    let newString = str;
  for (let i = 0; i < str.length; i++) {
    if (isUpper(str.charAt(i))) {
      newString.charAt(i) = ToLowerCase(str.charAt(i));
    } else if (isLower(str.charAt(i))){
      newString.charAt(i) = ToUpperCase(str.charAt(i));
    }
  }
  return newString;
}
console.log(reverseCase('foR'));

=======
>>>>>>> 16c30f05fda2a6621522f580bcc60d0ea35e639e
