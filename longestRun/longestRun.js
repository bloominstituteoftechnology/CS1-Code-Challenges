/* cc32 longestRun
INPUT: string
FUNCTION: longest run of any identical character
OUTPUT: array containing start and end indices of longest run
        (first if more than one, [ 0, 0 ] if none)
*/

const longestRun = (str) => {
  const len = str.length;
  let count = 0;
  let i = 0;
  let startIndex;
  let endIndex;
  for (i; i < len; i++) {
    if (i === i + 1 && count === 0) {
      startIndex = i;
      count++;
    } else if (i === i + 1) {
      count++;
    } else if (i !== i + 1 && count !== 0) {
      endIndex = i;
    } else {
      count = 0;
    }
  }
  return [ startIndex, endIndex ];
};

// TEST SUITE
console.log(longestRun('aaaaaabbbcc')); // ~~~> [ 0, 5 ]
// console.log(longestRun('abbbcc'));      // ~~~> [ 1, 3 ]
// console.log(longestRun('mississippi')); // ~~~> [ 2, 3 ]
// console.log(longestRun('abcdefgh'));    // ~~~> [ 0, 0 ]
// console.log(longestRun('aabbbcccc'));   // ~~~> [ 5, 4 ]














/*
* Write a function that, given a string, finds the longest run of
* identical characters and returns an array containing the start
* and end indices of that run.
* If there are two runs of equal length, return the first one.
* Return [0,0] for no runs.
* Examples:
* Input: "abbbcc"	Output: [ 1, 3 ]
* Input: "mississippi" Output: [ 2, 3 ]
* Input: "abcdefgh" Output: [ 0, 0 ]
* Input: "aabbbcccc" Output: [ 5, 4 ]
*/
