/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
 */

const multiply = (x, y) => {
  if (y === 0) {
    return 0
  }
  var product = x;
  while(y > 1) {
    total += x;
    y--
  }
  return product;
};

const divide = (x, y) => {
if (x === 0) {
  return 0;
}
if (y === 0) {
  return Infinity;
}
let count = 0;

while (x >= y) {
  x -= y;
  count++;
}
return Math.floor(count);


};

const modulo = (x, y) => {
if (x === 0) {
  return 0;
}
if (y === 0) {
  return NaN;
}
let remainder = 0;

while(x >= y) {
  remainder = x -= y;
}
return remainder;
};