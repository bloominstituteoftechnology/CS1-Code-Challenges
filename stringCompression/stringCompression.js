// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const strCompression = (string) => {
  const strMap = {};
  const strArray = str.split('')
  strArray.forEach((letter) => {
    if (strMap[letter]) {
      strMap[letter] += 1;
    } else {
      strMap[letter] = 1;
    }
  });

  const newString = JSON.stringify(Object.entries(strMap));
  const re = /\W/g
  const rem = newString.replace(re, '');

  if (rem.length < string) return rem;
  return string;
}
const str = 'aaabbbccc'
const str1 = 'aabbcc'
console.log(strCompression(str));
console.log(strCompression(str1));
