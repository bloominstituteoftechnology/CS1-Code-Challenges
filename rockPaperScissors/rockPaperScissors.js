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
  // arguments[0] = rounds || 3;
  // arguments[1] = options || ['rock', 'paper', 'scissor'];
  const results = [];
  const permutations = (playsSoFar, roundsLeft) => {
//    console.log(roundsLeft);
    if (roundsLeft <= 0) {
      results.push(playsSoFar);
    } else {
      for(let i = 0; i < options.length; i++) {
//        console.log(i);
        permutations(playsSoFar.concat(options[i]), roundsLeft-1);
      }
    }
  };
  permutations([], rounds);
  return results;
};

console.log(rockPaperScissors(3, ['rock', 'paper', 'scissor']));
