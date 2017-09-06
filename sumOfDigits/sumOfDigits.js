// Write a function called sumOfDigits that given a positive int, return the sum of its digits, assume all numbers will be positive

const sumOfDigits = (num) => {
    const arr = [];
  let acc = 0;
  while(num) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  return acc;
}
