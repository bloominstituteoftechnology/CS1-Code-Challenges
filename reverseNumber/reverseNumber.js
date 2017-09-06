// Write a function called reverseNumber that reverses a number.

function reverseNumber(num){
  const arr = [];
  while (num) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  return Number(arr.join(''));
}
