// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const compression = (str) => {
    let newStr = '';
    let count = 1;
    for (let i = 0; i < str.length - 1; i++) {
      if (str.charAt(i) == str.charAt(i + 1)) {
          count++;
      } else {
          newStr = newStr + str.charAt(i) + count;
          count = 1;
      }
    }
    newStr = newStr + str.charAt(str.length - 1) + count;
    if(newStr.length < str.length) {
      return newStr;
    } else {
      return str;
    }
    //return newStr.length < str.length ? newStr : str;
 }

 console.log(compression('a')); // a
 console.log(compression('abc')); // abc
 console.log(compression('aaa')); // a3
 console.log(compression('aaaccc')); //a3c3
 console.log(compression('aabcccccaaa')); //a2b1c5a3