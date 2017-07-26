// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const stringCompression = (str) => {
  let newString = '';
  for (let i = 0; i < str.length;) {
    const letter = str.charAt(i);
    let numLetter = 0;
    do {
      numLetter++;
      i++;
    }
    while (str.charAt(i) === letter);
    newString += letter + numLetter;
  }
  if (newString.length >= str.length) {
    return str;
  }
  return newString;
};
