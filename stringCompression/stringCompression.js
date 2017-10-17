// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

function strComp(str) {
  let i = 0, j = 0, compStr = '';

  while (j < str.length) {
    if (i === j) {
      compStr += str[i];
      j++;
    } else if (str[i] === str[j]) {
        j++;
    } else {
      compStr += String(j - i);
      i = j;
    }
  }
  compStr += String(j - i);

  if (compStr.length >= str.length) return str;
  return compStr;
}

const str = 'aabcccccaaa';
const compStr = strComp(str);
console.log(compStr);
console.log(strComp('aaaabc'));
console.log(strComp('aaaabbc'));
