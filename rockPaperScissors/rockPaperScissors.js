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
  const r = 'rock';
  const p = 'paper';
  const s = 'scissors';
  const origArr = [r,p,s];
  console.log(origArr);
  const allCombos = [];
  for (let i = 0; i < 1; i++) {
    const singleCombo = [];
    singleCombo.push(origArr[i]);
    singleCombo.push(origArr[i]);
    singleCombo.push(origArr[i]);
    allCombos.push(singleCombo);
    singleCombo.pop();
    singleCombo.pop();
    singleCombo.pop();
    for (let j = 0; j < 1; j++) {
      singleCombo.push(origArr[i]);
      singleCombo.push(origArr[i]);
      singleCombo.push(origArr[j]);
      console.log(singleCombo);
      allCombos.push(singleCombo);
    }
  }
  console.log(allCombos);
};

rockPaperScissors();