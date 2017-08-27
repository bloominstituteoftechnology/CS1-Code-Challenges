/**
* Longest Run
* Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run.
* If there are two runs of equal length, return the first one. Return [0,0] for no runs.
* Examples:
* Input: "abbbcc"	Output: [ 1, 3 ]
* Input: "mississippi" Output: [ 2, 3 ]
* Input: "abcdefgh" Output: [ 0, 0 ]
* Input: "aabbbcccc" Output: [ 5, 4 ]
*/

const longestRun = (str) => {
  let longest = 0;
  const longestArr = [];
  let compLetter = '';
  let counter = 0;
  let compArr = 0;
  for (let i = 0; i < str.length; i++) {
    // First run
    if (!compLetter && str[i] === str[i + 1]) {
      compLetter = str[i];
      counter++;
      compArr = i;
    }
    // Char to be compared && next matches
    if (str[i] === compLetter && str[i] === str[i + 1]) {
      counter++;
    }
    // Char to be compared && next does not match
    if (str[i] === compLetter && (str[i] !== str[i + 1] || !(str[i + 1]))) {
      counter++;
      if (counter > longest) {
        longest = counter;
        counter = 0;
        while (longestArr.length > 0) {
          longestArr.pop();
        }
        longestArr.push(compArr);
        longestArr.push(i);
      }
      counter = 0;
    }
    // Char to be compared does not match
    if (str[i] !== compLetter) {
      compLetter = str[i];
      compArr = i;
      counter++;
    }
  }
    // No runs
  if (longest === 0) {
    return [0, 0];
  }
    // Return longest
  return longestArr;
}

// *************************
console.log(longestRun('abbbcc')); // [1, 3]
console.log(longestRun('mississippi')); // [2, 3]
console.log(longestRun('abcdefgh')); // [0, 0]
console.log(longestRun('aabbbcccc')); // [5, 4] ??? [2, 4] can't be bigger # first
