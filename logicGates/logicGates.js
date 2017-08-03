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
  let temp = !(x && y);
  if (temp === true) return 1;
  return 0;
};

const NOT = (n) => {
  return NAND(n, n);
	// Do not use !, &&, or ||
};

const AND = (x, y) => {
  return NOT(NAND(x, y));
	// Do not use &&, ||, or !
	// You can use any of the functions that you have already written
};

const OR = (x, y) => {
  return NAND(NAND(x, x), NAND(y, y));
  // so it'll be false if x is true and same for y
  // so if either are false, nand will pull out true
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
};

const XOR = (x, y) => {
  AND(OR(x, y), NAND(x, y));
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
};
