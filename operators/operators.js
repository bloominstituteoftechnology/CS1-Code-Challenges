/*
 * Implement  three functions  called  multiply,  divide, and  modulo.
 * These functions should multiply, divide, or return the remainder of
 * two arguments.  Now for the tricky part: you can only use the + and
 * - operators to  implement these functions.  For  division just drop
 * the remainder.
 */


/*
 * This  implementation  of  multiplication   uses  a  positive  y  to
 * recursively  compute  the  product,  reversing  the  sign  of  both
 * operands if y was originally  negative, thus preserving the overall
 * sign.
 */
const multiply = (x, y) => {
  if (y < 0) {
    y = 0 - y;
    x = 0 - x;
  }
  const mult = (x, y) => {
    if (!y) return 0;
    return mult(x, y - 1) + x;
  }
  return mult(x, y);
}

/*
 * This  implementation   of  division  recursively  either   adds  or
 * substracts one for each division operation upon the absolute values
 * of the dividend and divisor; if both operands are positive, or both
 * operands  are  negative,  then  unit is  positive  1,  producing  a
 * positive quotient;  if only one  operand is negative, then  unit is
 * negative 1, producing a negative quotient.
 */
const divide = (x, y) => {
  if (y === 0) return undefined;

  let unit = 1;
  if (y < 0) {
    unit = -1;
    y = 0 - y;
  }
  if (x < 0) {
    unit = 0 - unit;
    x = 0 - x;
  }
  const div = (x, y) => {
    if (x < y) return 0;
    return div(x - y, y) + unit;
  }
  return div(x, y);
}

/*
 * q :=: R
 * a = nq + r || r = a - nq || r = a - n(a/n)
 * |r| < |n|
 * a modulo 0 :=: undefined
 * a module 1 :=: 0
 * sign ambiguity exists for nonzero r; multiple options; no consensus
 * computer language implementations vary arbitrarily;
 *
 * JavaScript produces a  remainder with a sign that  follows ths sign
 * of the dividend  (a) so that 11 % -5  => 1 and -11 % 5  => -1; this
 * option is implemented below.
 *
 * This implementation uses the absolute  value of the divisor, uses a
 * function  that  recursively  finds  the remainder  for  a  positive
 * dividend, but returns its negative when the dividend is negative.
 */
const modulo = (x, y) => {
  if (y === 0) return undefined;
  if (y === 1) return 0;
  if (y < 0) y = 0 - y;
  
  const mod = (x, y) => {
    if (x < y) return x;
    return mod(x - y, y);
  }
  
  return x >= 0 ?
    mod(x, y)   :
    0 - mod(0 - x, y);
}

console.log('Multiplication');
console.log(multiply(0, 5)); // 0
console.log(multiply(5, 0)); // 0
console.log(multiply(5, 5)); // 25
console.log(multiply(-5, 2)); // -10
console.log(multiply(5, -2)); // -10
console.log(multiply(-5, -2)); // 10

console.log('Division');
console.log(divide(10, 0)); // undefined
console.log(divide(0, 10)); // 0
console.log(divide(20, 10)); // 2
console.log(divide(-20, 10)); // -2
console.log(divide(-20, -10)); // 2
console.log(divide(21, 10)); // 2
console.log(divide(19, 10)); //1

console.log('Modulo');
console.log(modulo(10, 0)); // undefined
console.log(modulo(10, 1)); // 0
console.log(modulo(20, 10)); // 0
console.log(modulo(21, 10)); // 1
console.log(modulo(21, 6)); // 3
console.log(modulo(20, -9)); // 2
console.log(modulo(-20, 9)); // -2
console.log(modulo(-20, -9)); // -2
