// cc21 rockPaperScissor

/*
 * * Write a function that generates every sequence of throws a single
 * * player could throw over a three-round game of rock-paper-scissors.
 * *
 * * Your output should look something like:
 * *   [["rock", "rock", "rock"],
 * *    ["rock", "rock", "paper"],
 * *    ["rock", "rock", "scissor"],
 * *    ["rock", "paper", "rock"],
 *              ...etc...
 *                   */

// const rockPaperScissors = () => {
// 	// TODO: your solution here
//   // const hand = {0: 'rock',
//   //               1: 'paper',
//   //               2: 'scissor'}
//   const hand = ['rock', 'paper', 'scissor'] // hand.length = 3
//   let rounds = 3
//   const totalPossibleCombos = hand.length ** rounds // 27 ~~~> (n terms)**3
//
// };


const test = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let firstElement = arr[i];
    let restOfArray = arr.slice(0, i) + arr.slice(i + 1, arr.length);

    for (let sub of test(restOfArray)) {
      result.push(firstElement, sub);
    }
  }
  return result;
}

console.log(test(['rock', 'paper', 'scissor']));

//
// const allAnagrams = (str) => {
//
//   if (str.length < 2) return str;
//
//   const result = [];
//
//   for (let i = 0; i < str.length; i++) {
//     let firstLetter = str[i];
//     let restOfString = str.slice(0, i) + str.slice(i + 1, str.length);
//
//     for (let sub of allAnagrams(restOfString)) {
//       result.push(firstLetter + sub);
//     }
//   }
//   return result;
// }
//
//
// const allAnagrams = (str, start = '') => {
//   if (str.length === 1) return [start + str];
//   const anagrams = [];
//
//   for (let i = 0; i < str.length; i++) {
//     const result = allAnagrams(str.substr(0, i) + str.substr(i + 1), str[i]);
//     for (let j = 0; j < result.length; j++) {
//       anagrams.push(start + result[j]);
//     }
//   }
//   return anagrams;
// };
