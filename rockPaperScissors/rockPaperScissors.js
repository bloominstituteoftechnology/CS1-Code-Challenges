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
	const result = [];
	const choices = ['rock', 'paper', 'scissors'];
	const foundChoices = (rouondsLeft, roundsPlayed) => {
		if (roundsLeft === 0) {
			results.push(roundsPlayed);
			return;
		}
		for (let i = 0; i < choices.length, i++) {
			const choice = choices[i];
			foundChoices(roundsLeft - 1, roundsPlayed.concat(choice));
		}
	};
	findChoices(rounds, []);

	return results;
};