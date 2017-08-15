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
	if(!(x && y)) {
		return 1;
	} else {
		return 0;
	}
};
console.log('===== NAND =====');
console.log('0 0 | ' + NAND(0,0));
console.log('0 1 | ' + NAND(0,1));
console.log('1 0 | ' + NAND(1,0));
console.log('1 1 | ' + NAND(1,1));

const NOT = (n) => {
	// Do not use !, &&, or ||
	if(NAND(n, n)) {
		return 1;
	} else {
		return 0;
	}
	
};

console.log('===== NOT =====');
console.log('0 | ' + NOT(0));
console.log('1 | ' + NOT(1));

const AND = (x, y) => {
	// Do not use &&, ||, or !
	// You can use any of the functions that you have already written
	if (NAND(x, y) === 1) {
		return 0;
	} else {
		return 1;
	}
};

console.log('===== AND =====');
console.log('0 0 | ' + AND(0,0));
console.log('0 1 | ' + AND(0,1));
console.log('1 0 | ' + AND(1,0));
console.log('1 1 | ' + AND(1,1));

const OR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
	if(NAND(x,x)) {
		if(NAND(y,y)) {
			return 0;
		}
	}
	return 1;
};

console.log('===== OR =====');
console.log('0 0 | ' + OR(0,0));
console.log('0 1 | ' + OR(0,1));
console.log('1 0 | ' + OR(1,0));
console.log('1 1 | ' + OR(1,1));

const XOR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
	if(NAND(x, NAND(x,y))) {
		if(NAND(NAND(x, y), y)) {
			return 0;
		}
	}
	return 1;
};

console.log('===== XOR =====');
console.log('0 0 | ' + XOR(0,0));
console.log('0 1 | ' + XOR(0,1));
console.log('1 0 | ' + XOR(1,0));
console.log('1 1 | ' + XOR(1,1));