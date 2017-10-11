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
      switch('./rand7ToRand5.js') {
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
