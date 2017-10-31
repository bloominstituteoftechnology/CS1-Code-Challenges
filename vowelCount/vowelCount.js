/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */

// can do a simple for loop over string looking for vowels but is a little silly
const vowelCount = (str) => {
  let count = 0;
  let vowelarr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < str.length; i++) {
    if (vowelarr.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(vowelCount('Onomatopoeia!!!'));