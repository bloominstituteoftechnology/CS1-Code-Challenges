// romanNumberEncoder.js
/* Define a function that takes in a positive integer, and returns the Roman
/* Numeral representation of that number.  

Symbol    Value
 I          1
 V          5
 X          10
 L          50
 C          100
 D          500
 M          1,000 
*/

function romanNumeralize(number) {
  romanValues = {
    M:  1000,
    CM: 900,
    D:  500,
    CD: 400,
    C:  100,
    XC: 90,
    L:  50,
    XL: 40,
    X:  10,
    IX: 9,
    V:  5,
    IV: 4,
    I:  1
  }

  let roman = '';
  Object.entries(romanValues).forEach(rv => {
    if (number > 0) {
      const a = Math.floor(number / rv[1]);
      const b = number % rv[1];
      for (x = 0; x < a; x++)
        roman += rv[0];
      number = b;
    }
  });
  return roman;
}

console.log(romanNumeralize(1990) === 'MCMXC');
console.log(romanNumeralize(4) === 'IV');
console.log(romanNumeralize(99) === 'XCIX');
console.log(romanNumeralize(101) === 'CI');
console.log(romanNumeralize(148) === 'CXLVIII');
