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
  const ansArr = [0, 0];
  let longestRunCount = 0;
  let letterCount = 0;
  let tempIndex;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] && str[i] !== str[i - 1]) {
      tempIndex = i;
      letterCount = 1;
    } else if (str[i] === str[i + 1]) {
      letterCount++;
    } else if (letterCount === longestRunCount && str[i + 1] === undefined && str[i] === str[i - 1]) {
        ansArr[0] = tempIndex;
        ansArr[1] = i;
    } else {
      if (letterCount > longestRunCount) {
        longestRunCount = letterCount;
        ansArr[0] = tempIndex;
        ansArr[1] = i;
        letterCount = 0;
      }
    }
  };
  return ansArr;
};
