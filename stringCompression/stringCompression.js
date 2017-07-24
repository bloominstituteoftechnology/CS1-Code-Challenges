// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).


// const compress = function(str) {
//   // ...
// }

class Compressor {
  constructor(upperOrLowerCaseString) {
    this.string = upperOrLowerCaseString;
    this.count = 1;
    this.arr = [];
    this.worthCompressing = (compareStringLength ? true : false)
  }

  totalRepetitions() {
    for (let i = 0; i < this.string.length; i++) {
      if (this.string.charAt(i) === this.string.charAt(i + 1)) { this.count++; }
    }
    return this.count
  }

  compareStringLength(str) {
    // if there are no letters repeated more than twice, not worth compressing
  }

}




// TEST SUITE
const test = new Compressor('aabcccccaaa');
// const test = new Compressor('abca');
console.log(test);
console.log(test.totalRepetitions()); // ---> 8
console.log(test.compareStringLength()); // ---> a2b1c5a3
