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
const longestRun = (string) => {
  let max = [0, 0];
  let current = [0, 0];

  for (let i = 0; i < string.length; i++) {
    if (string[i - 1] === string[i]){
      current[1] = i;
      if (current[1] - current[0] > max[1] - max[0]) {
        max = current
      }
    }
    else {
      current = [i, i];
    }
  }
  return max;
};

console.log(longestRun('abbbcc')) 	// Output: [ 1, 3 ]
console.log(longestRun('mississippi')) // Output: [ 2, 3 ]
console.log(longestRun('abcdefgh')) // Output: [ 0, 0 ]
console.log(longestRun('aabbbcccc')) // Output: [ 5, 8 ]
