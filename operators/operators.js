/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
 */

const multiply = (x, y) => {
  if (!y) return 0;
  return multiply(x, y - 1) + x;
}

const divide = (x, y) => {
  if (!y) return NaN;
  if (x < y) return 0;
  return divide(x - y, y) + 1;
}

const modulo = (x, y) => {
  if (!y) return undefined;
  if (x < y) return x;
  return modulo(x - y, y);
}
