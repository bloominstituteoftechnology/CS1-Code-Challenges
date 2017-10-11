/* rand7ToRand5.js

Given a function rand7 that generates a random number from 1 to 7, how
would  you  write  a  function  that generates  a  number  with  equal
probability from 1 to 5? */

function rand7() {
  return 1 + Math.floor(Math.random() * 7);
}

function rand5() {
  let temp = rand7() + rand7() + rand7() + rand7() + rand7();
  temp = temp % 5 + 1;
  return temp;
}

function test5() {
  const testRuns = 1000000;
  let results = {
    ones: 0,
    twos: 0,
    thre: 0,
    four: 0,
    fivs: 0,
  };
  for (let i = 0; i < testRuns; i++) {
    if (i < testRuns) {
      switch(rand5()) {
      case 1:
        results.ones += 1;
        break;
      case 2:
        results.twos += 1;
        break;
      case 3:
        results.thre += 1;
        break;
      case 4:
        results.four += 1;
        break;
      case 5:
        results.fivs += 1;
        break;
      default:
        console.log('you silly puppy!');
        break;
      }
    }
  }
  return results;
}
console.log(test5());
