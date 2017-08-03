/*
 * For this coding challenge you will be recreating low level logic gates.
 * You will first create the NAND function and then you will create
 * NOT, OR, AND, and XOR all using the NAND function that you created.
 * Implement NAND however you would like and then use NAND to implement the
 * other logic gates.
 * See the link below for the truth tables for these logic gates.
 * https://en.wikipedia.org/wiki/NAND_logic#NAND
 * All functions should return a 1 for true and a 0 for false.
 */

const NAND = (x, y) => {
	// You can use whatever JS operators that you would like: &&, ||, !
  if (!(x && y)) {
    return 1;
  }
  return 0;
};

const NOT = (n) => {
	// Do not use !, &&, or ||
  if (n == false) {
    return 1;
  }
  if (n == true) {
  return 0;
  }
};

const AND = (x, y) => {
	// Do not use &&, ||, or !
	// You can use any of the functions that you have already written
  return NOT(NAND(x, y));
};

const OR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
  if (x == true) {
    return 1;
  } else if (y == true) {
    return 1;
  } else {
    return 0;
  }
};

const XOR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
  if (AND(x, y) === 1) {
    return 0;
  } else if (OR(x, y) === 0) {
    return 0;
  } else {
    return 1;
  }
};



// ***************************************************************
// console.log(NAND(0, 0));
// console.log(NAND(0, 1));
// console.log(NAND(1, 0));
// console.log(NAND(1, 1));
// console.log(NOT(1));
// console.log(NOT(0));
// console.log(AND(0, 0));
// console.log(AND(1, 0));
// console.log(AND(0, 1));
// console.log(AND(1, 1));
// console.log(OR(0, 0));
// console.log(OR(1, 0));
// console.log(OR(0, 1));
// console.log(OR(1, 1));
console.log(XOR(0, 0));
console.log(XOR(1, 0));
console.log(XOR(0, 1));
console.log(XOR(1, 1));
