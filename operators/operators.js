/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
 */

const multiply = function(a, b) {
  const arr = new Array(b).fill(a);
  const product = arr.reduce((a, b) => a + b, 0);
  return product;
};

const divide = function(x, y) {
  let count = 0;
  while (x - y >= 0) {
    x -= y;
    count++;
  }
  return `${count} remainder ${x}`;
};

const modulo = function(phi, psi) {
  let count = 0;
  while (phi - psi >= 0) {
    phi -= psi;
    count++;
  }
  return phi;
};


// TEST SUITE
// multiplication
console.log(multiply(2, 10)) // ---> 20
console.log(multiply(1, 1))  // ---> 1
// division
console.log(divide(121, 11)) // ---> 11 remainder 0
console.log(divide(123, 11)) // ---> 11 remainder 2
// modulo
console.log(modulo(15000, 11)) // ---> 7
console.log(modulo(123, 11)) // ---> 2
