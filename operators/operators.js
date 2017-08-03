/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
 */
function multiply(x,y){
let acc = 0;
if (x === 0 || y === 0) {
  return 0;
}
  for (let i = 0;i < y; i++) {
  acc = acc + x;
}
  return acc;
}

function divide(x,y){
  let acc = x;
  counter = 0;
  if (y === 0) {
    return undefined;
  } else if (x === 0) {
    return 0;
  }
  while (acc >= y) {
    acc = acc - y;
    counter ++;
  }
  return counter;
}

function modulo(x,y){
  let acc = x;
  counter = 0;
  if (y === 0) {
    return undefined;
  } else if (x === 0) {
    return 0;
  }
  while (acc >= y) {
    acc = acc - y;
    counter ++;
  }
  return acc;
}

// *************Tests*******************
// console.log(multiply(7,5)); // 35
// console.log(multiply(7,0)); // 0
// console.log(multiply(0,0)); // 0
// console.log(divide(35,7)); // 5
// console.log(divide(37,7)); // 5
// console.log(divide(37,0)); // undefined
console.log(modulo(37,7)); // 2
console.log(modulo(35,5)); // 0
console.log(modulo(35,0)); // undefined
