// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const compressString = (string) => {
  let compressed = '';
  let count = 1;
  let compareChar = string.charAt(0);

  for (let i = 1; i < string.length; i++) {
    if (string[i] !== compareChar) {
      compressed += compareChar += count;
      compareChar = string[i];
      count = 1;
    } else {
      count++;
    }
  }
  compressed += compareChar += count;
  
  if (compressed.length >= string.length) {
    return string;
  }
  return compressed;

}