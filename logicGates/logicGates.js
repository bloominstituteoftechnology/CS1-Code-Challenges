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
  if((x ===1) && (y ===1)) {
    return 0;
  }
  return 1;
};

// const logic = NAND (1, 1);

// console.log(logic);


const NOT = (n) => {
	// Do not use !, &&, or ||
  if(n === 1){
    return 0;
  }
  return 1;
};

// const logic = NOT (1);

// console.log(logic);

const AND = (x, y) => {
	// Do not use &&, ||, or !
	// You can use any of the functions that you have already written

  if(NAND(x, y) === 1) {
    return 0;
  }
  return 1;
};

// const logic = AND (0,0);

// console.log(logic);

const OR = (x, y) => {
	// Do not use &&, ||, or !
	// You can use any of the functions that you have already written

  if(NAND(NOT(x), NOT(y)) === 0) {
    return 0;
  }
  return 1;
};

// const logic = OR(0,0);

// console.log(logic);

const XOR = (x, y) => {
	// Do not use &&, ||, or !
	// You can use any of the functions that you have already written

  if(x === y) {
    return 1;
  }
  return 0;
};

// const logic = XOR(0,0);

// console.log(logic);
