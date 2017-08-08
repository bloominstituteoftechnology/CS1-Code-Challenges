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

const rockPaperScissors = (numOfRounds) => {
	// TODO: your solution here
	const choices = ['rock', 'paper', 'scissors'];
	const outcome = [];
	const possibleCombos = (roundsRemaining, gamesPlayed) => {
		if(roundsRemaining === 0) {
			outcome.push(gamesPlayed);
			return;
		}
		for(let i = 0; i < choices.length; i++) {
			const oneChoice = choices[i];
			possibleCombos(roundsRemaining - 1, gamesPlayed.concat(oneChoice));
		}
	}
	possibleCombos(numOfRounds, []);
	return outcome;
};

console.log(rockPaperScissors(3));