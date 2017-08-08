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
	// TODO: your solution here
  const choices = ['rock', 'paper', 'scissors']
  const results = []
  for (let i = 0; i < choices.length; i++) {
      for (let j = 0; j < choices.length; j++) {
        for (let k =0; k < choices.length; k++) {
          results.push([].concat(choices[i], choices[j], choices[k]));
        }
      }
    }
  return results;
};

// work on recursive solution 
