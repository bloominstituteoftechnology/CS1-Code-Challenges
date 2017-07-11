const longestString = (strArr) => {
<<<<<<< HEAD
  // tempStr variable to hold the string
  let tempStr = '';
  // loop over strArr
  strArr.forEach(str => {
    // if current string in arry is bigger than tempStr,
    // then update the variable tempStr
    if(str.length > tempStr.length) tempStr = str;
  })
  return tempStr;
};

console.log(`Ryan: ${longestString(['abc', 'def', 'gasdfasf', 'asdf', 'e', 'agwoaiengpoing', 'pp'])}`);

// Jesh's solution using sort()
const longStr = (arr) => {
  arr.sort((a, b) => {
    return b.length - a.length;
  });
  return arr[0];
}

console.log(`Jesh: ${longStr(['abc', 'def', 'gasdfasf', 'asdf', 'e', 'agwoaiengpoing', 'pp'])}`);
=======
  let tempStr = '';
  strArr.forEach(str => {
    if(str.length > tempStr.length) tempStr = str;
  });
  return tempStr;
};

longestString(['abc', 'def', 'gasdfasf', 'asdf', 'e', 'agwoaiengpoing']);
>>>>>>> 9ec7f38c8f1bfc9727e15ce95c4c55f50815bfba
