
function reverseNumber(num) {
  const helper = (n, c) => {
    if (n < 10) {
      c.unshift(n);
      return c;
    }
    c.unshift(n % 10);
    return helper(Math.floor(n / 10), c);
  }
  const a = helper(num, []);
  
  answer =  a.reduce((cumm, n, i) => {
    return (cumm + n * Math.pow(10, i));
  });
  return answer;
}

console.log(reverseNumber(123));
console.log(reverseNumber(3));
console.log(reverseNumber(543210));
