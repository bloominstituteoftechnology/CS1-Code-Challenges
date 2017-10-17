/*
  sumDigPower.js

  The number  135 is particularly  special in that  if you take  each digit,
  from left to right, and you put them to the consecutive power.

  135 = 1^1 + 3^2 + 5^3
  89 = 8^1 + 9^2

  Write a  function sumDigitPower that  takes in  a starting number,  and an
  ending number, and  check every number in that  range inclusive (including
  a, and b). a will be greater than or equal to 0.
*/

function sumDigPower(a, b) {
  const found = [];
  for (let x = a; x <=b; x++) {
    s = x.toString().split('').
      reduce((acc, base, exp) => acc + Math.pow(parseInt(base), exp+1), 0);
    if (s === x) found.push(s);
  }
  return found;
}

console.log(sumDigPower(89,90));
