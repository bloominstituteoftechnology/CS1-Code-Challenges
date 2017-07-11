const longestString = (strArr) => {
  let tempStr = '';
  strArr.forEach(str => {
    if(str.length > tempStr.length) tempStr = str;
  });
  return tempStr;
};

longestString(['abc', 'def', 'gasdfasf', 'asdf', 'e', 'agwoaiengpoing']);