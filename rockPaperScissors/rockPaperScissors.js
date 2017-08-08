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

const rockPaperScissors = () => {
  let choices = 3;
  let choicearr = ["rock", "paper", "scissors"];
  arr = [];
  for (let i = 0; i < choices; i++) {
    for (let j = 0; j < choices; j++) {
      for (let k = 0; k < choices; k++) {
        arr.push([choicearr[i],choicearr[j],choicearr[k]]);
      }
    }
  }
  return arr;
	// TODO: your solution here
};

console.log(rockPaperScissors());


const rpsRecursion = () => {

}