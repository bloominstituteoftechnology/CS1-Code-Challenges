/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */

const vowelCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  const lower = str.toLowerCase();
  console.log(lower);
  for (let i = 0; i < str.length; i++) {
    if (isVowel(lower.charAt(i))) {
      counter++;
    }
    console.log(`char: ${lower.charAt(i)}, count: ${counter}`);
  }
  return counter;
}


function isVowel(chartoCheck) {
  switch (chartoCheck) {
    case 'a':
      return true;
      break;
    case 'e':
      return true;
      break;
    case 'i':
      return true;
      break;
    case 'o':
      return true;
      break;
    case 'u':
      return true;
      break;
    default:
      return false;
  }
}

console.log(vowelCount('Hello World'));
