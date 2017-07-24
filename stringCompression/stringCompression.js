// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const compress = (str) => {
  let counter = 1;
  let newstr = '';
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) newstr = newstr + str[i] + counter; 
    else if (str[i + 1] === str[i]) counter += 1;
    else {
    newstr = newstr + str[i] + counter;
    counter = 1;
    }
  }
  if (newstr.length < str.length) return newstr;
}

console.log(compress('aabcccccaaa'));
