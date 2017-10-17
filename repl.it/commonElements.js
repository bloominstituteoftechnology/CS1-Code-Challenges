// commonElements.js

/*
/*Write a function called commonElements that has parameters for two
/*arrays.  Return an array of all items that are present in both arrays.  Do
/*not modify the arrays that are passed in.
*/

function commonElements(a, b) {
  const c = [];
  a.forEach(ae => {
    if (b.includes(ae)) c.push(ae);
  });
  return c;
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
console.log(commonElements(['a', 'b', 'c'], ['x', 'y', 'z', 'a'])); // ['a']
console.log(commonElements([1, 2, 3], [4, 5, 6])); // []
