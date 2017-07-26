/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
 */

const multiply = (num, multiplier) => {
  let count = multiplier;
  let result = num;
  while (count) {
    result += num;
    count--;
  }
  return result;
};

const divide = (num, divisor) => {
  let whole = num;
  let sub = divisor;
  let result = 0;
  while (whole > sub) {
    whole - sub;
    result ++;
  }
  return result;
};

const divide = (num, divisor) => {
  let whole = num;
  let sub = divisor;
  while (whole > sub) {
    whole - sub;
  }
  return whole;
};