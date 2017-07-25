// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).




const compressor = function(str) {
  // halt if compressing would make a longer string

  // compression algorithm
  const arr = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else if ((str[i] != str[i + 1])) {
      arr.push(`${str[i]}${count}`);
      count = 1
    }
  }
  return arr;
};


// TEST SUITE
const test = compressor('aabcccccaaa'); // ---> a2b1c5a3
console.log(test);
console.log(compressor('abca'));        // ---> a1b1c1a1
