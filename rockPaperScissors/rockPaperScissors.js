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

const rockPaperScissors = (rounds, options) => {
	// TODO: your solution here
  rounds = rounds || 3;
  options = options || ['rock', 'paper', 'scissor'];
  const results = [];
  const permutations = (roundsSoFar, roundsLeft) => {
    if (roundsLeft === 0) {
      results.push(roundsSoFar);
    }
    for(let i = 0; i < options.length; i++) {
      permutations(roundsSoFar.concat(options[i]), roundsLeft-1);
    }
  };
  permutations([], rounds);
  return results;	
};

console.log(rockPaperScissors());
