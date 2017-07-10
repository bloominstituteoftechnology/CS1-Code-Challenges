/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

// 1. make a for loop over an array
// 2. have a placeholder outside the loop
// 3. check of the i'th element is larger than the placeholder and replace
// 4. return the placeholder at the end.

//  const longeststring = (ans) => {
//   let placeholder = [];
//    for (let i = 0; i < ans.length; i++;){
//     if (ans[i].length > placeholder.length) {
//       placeholder = ans[i];
//     }
//    }
//    return placeholder;
//  }

// const test = ['asdfghjkl;', 'qwerty', 'hello', 'appleseed'];
// console.log(longeststring(test));


// because the other bit of code just isnt working, do something creative
// 1. sort the array by string length
// 2. return the first element

const longstr = (arr) => {
  arr.sort((a, b) => {
    return b.length - a.length;
  });
  return arr[0];
}

// const test = ['asdfghjkl;', 'qwerty', 'hello', 'appleseed'];
// console.log(longstr(test));
