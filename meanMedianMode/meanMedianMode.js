/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */

const objStats = {};

const Stats = (arr) => {
  let copyarr = arr.map((x) => {
    return x;
  });
  copyarr.sort((a, b) => {
    return a - b;
  });
  const sum = copyarr.reduce((sum, value) => {
    return sum + value;
  });
  objStats.mean = sum / copyarr.length;
  if (copyarr.length % 2 === 1) {
    objStats.median = copyarr[Math.ceil(copyarr.length / 2)];
  } else {
    objStats.median = (copyarr[(copyarr.length / 2) - 1] + copyarr[copyarr.length / 2]) / 2;
  }
  const modeObj = {};
  let arrModeObj;
  for (let i = 0; i < copyarr.length; i++) {
    if (!modeObj[copyarr[i]]) {
      modeObj[copyarr[i]] = 1;
    } else {
      modeObj[copyarr[i]] += 1;
    }
    arrModeObj = Object.entries(modeObj);
  }
  const modeValues = Object.values(modeObj).sort((a, b) => {
    return b - a;
  });
  const modeValue = modeValues[0];
  objStats.mode = [];
  for (let i = 0; i < arrModeObj.length; i++) {
    if (arrModeObj[i][1] === modeValue) objStats.mode.push(parseInt(arrModeObj[i][0]));
  }
  return objStats;
}
console.log(Stats([1, 2, 3, 4, 4, 5]));
