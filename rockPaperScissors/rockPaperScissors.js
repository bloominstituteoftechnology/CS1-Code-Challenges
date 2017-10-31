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
  const choicearr = ["rock", "paper", "scissors" /*,"lizard", "spock" */];
  arr = [];
  for (let i = 0; i < choicearr.length; i++) {
    for (let j = 0; j < choicearr.length; j++) {
      for (let k = 0; k < choicearr.length; k++) {
        arr.push([choicearr[i],choicearr[j],choicearr[k]]);
      }
    }
  }
  return arr;
	// TODO: your solution here
};

console.log(rockPaperScissors());


// const rpsrecursion = (rounds) => {
//   const results = [];
//   const choices = ['scissors', 'rock', 'paper'];
//   const findChoices = (roundsLeft, roundsPlayed) => {
//     if (roundsLeft === 0) {s
//       results.push(roundsPlayed);
//       return;
//     }
//     for (let i = 0; i < choices.length; i++) {
//       const choice = choices[i];
//       findChoices(roundsLeft - 1, roundsPlayed.concat(choice));
//     }
//   };
//   findChoices(rounds, []);
  
//   return results;
// };

// console.log(rpsrecursion(3));