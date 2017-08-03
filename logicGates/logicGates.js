// cc19 logicGates

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

// phi AND psi
// (T && T) ---> T
// (T && F) ---> F
// (F && T) ---> F
// (F && F) ---> F
//
// NOT (phi AND psi) operator
// !(T && T) ---> F
// !(T && F) ---> T
// !(F && T) ---> T
// !(F && F) ---> T
const NAND = (x, y) => {
	// You can use whatever JS operators that you would like: &&, ||, !
  if ( !(x && y) ) {
    return 1;
  }
  return 0;
};
console.log('NAND');
console.log(NAND(true, true));   // ---> 0
console.log(NAND(true, false));  // ---> 1
console.log(NAND(false, true));  // ---> 1
console.log(NAND(false, false)); // ---> 1


// Not operator
// !T --> F
// !F --> T
const NOT = (n) => {
	// Do not use !, &&, or ||
  return (NAND(n, n));
};
console.log('NOT')
console.log(NOT(true));   // ---> 0
console.log(NOT(false));   // ---> 1

// AND
// T && T ---> T
// T && F ---> F
// F && T ---> F
// F && F ---> F
const AND = (x, y) => {
	// Do not use &&, ||, or !
	// You can use any of the functions that you have already written
  
};

// INclusive OR
// T || T ---> T
// T || F ---> T
// F || T ---> T
// F || F ---> F
const OR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
};

// EXclusive OR
// T X T ---> F
// T X F ---> T
// F X T ---> T
// F X F ---> F
const XOR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
};
