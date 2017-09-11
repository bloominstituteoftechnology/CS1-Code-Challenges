/* cc36 sumOfDigits - https://repl.it/student/submissions/1448448
Write a function called sumOfDigits that given a positive integer, returns the sum of its digits.
Assume all numbers will be positive.

Input Sample:

23
496

Output Sample:

5
19
*/

// const sumOfDigits = (num) => {
//   const integers = ('' + num).split(''),
//         len = integers.length;
//   console.log(integers);
//   let i = 0,
//       sum = 0;
//   for (i; i<len; i++) {
//     sum += Number(integers[i]);
//     // console.log(sum);
//   }
//   return sum;
// }

var sumOfDigits = (num) => {
  const stringIntegers = ('' + num).split(''),
        len      = stringIntegers.length;
  integers = stringIntegers.map(num => Number(num));
  sum = integers.reduce((sum, n) => sum + n, 0);
  return sum;
}

// TEST SUITE
const x = 12345
console.log(sumOfDigits(x));   // ~~~> 15
console.log(sumOfDigits(23));  // ~~~> 5
console.log(sumOfDigits(496)); // ~~~> 19
console.log(typeof(sumOfDigits(496))); // ~~~> 19
