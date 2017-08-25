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

const longestRun = (str) =>{
  // store the longest run of identical characters while iterating over string
  //compare consecutive characters in a string to see if a run is started
  let long = [0, 0];
  let curr = [0, 0];

  for(let i = 1; i < str.length ; i++) {

    if (str[i-1] === str[i]) {

       curr[1] = i;
      if(curr[1]-curr[0] > long[1]-long[0]){
        //assign curr to long
        long = curr;
      }
    }
    else{
      curr=[i,i];
  }
  }
  return long;
};



var strings = 'abbbbcc';
console.log(longestRun(strings));
