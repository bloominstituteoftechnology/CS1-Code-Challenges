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
  const rps = ['rock', 'paper', 'scissor'];
  const rps_seq = [];
  rps.forEach(item1 => {
    rps.forEach(item2 => {
      rps.forEach(item3 => {
        rps_seq.push([item1, item2, item3]);
      });
    });
  });
  return rps_seq;
};

const all = rockPaperScissors();
console.log(all);
