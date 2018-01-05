/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */

const meanMedianMode = (arr) => {
  const ansObj = {};
  const modeObj = {};
  let sum = 0;
  let highestCount = 1;
  arr.sort((a,b) => {
    return (a-b);
  });
  arr.forEach((num) => {
    sum += num;
    if (!modeObj[num]) {
      modeObj[num] = 1;
    } else {
      modeObj[num]++;
      if (modeObj[num] > highestCount) highestCount = modeObj[num];
    }
  });
  ansObj.mean = sum/arr.length;
  const middle = Math.round(arr.length / 2) - 1;
  if (arr.length % 2 === 0) {
    ansObj.median = (arr[middle] + arr[middle + 1]) / 2
  } else {
    ansObj.median = arr[middle];
  }
  if (highestCount === 1) {
    ansObj.mode = null;
  } else {
    const modeArr = [];
    Object.keys(modeObj).forEach((key) => {
      if (modeObj[key] === highestCount) modeArr.push(Number(key));
    });
    if (modeArr.length < 2) {
      ansObj.mode = modeArr.pop(modeArr[0])
    } else {
      ansObj.mode = modeArr;
    }
  }
  return ansObj;
};
