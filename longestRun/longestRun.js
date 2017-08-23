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

  let index = 0, start = 0, current = str[0], a = 0, b = 0;

  const update = () => {
    if (index - start - 1 > b - a) {
      a = start, b = index - 1;
    }
  }

  for (let s of str) {
    if (s !== current) {
      update();
      start = index, current = s;
    }
    index++;
  }
  update();

  return [a, b];
}

const str1 = 'abbbcc';
console.log(longestRun(str1));
const str2 = 'mississippi';
console.log(longestRun(str2));
const str3 = 'abcdefgh';
console.log(longestRun(str3));
const str4 = 'aabbbcccc';
console.log(longestRun(str4));
