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

const convert = output => output ? 1 : 0;

/*
 *     NAND
 *     ====
 * A  |  B  | OUT
 * ---|-----|----
 * 0  |  0  |  1
 * 1  |  0  |  1
 * 0  |  1  |  1
 * 1  |  1  |  0
 * --------------*/
const NAND = (x, y) => {
    // You can use whatever JS operators that you would like: &&, ||, !
    return convert (!(x && y));
};

/*
 *   NOT
 *   ===
 * N  | OUT
 * --------
 * 0  | 1
 * 1  | 0
 * --------*/
const NOT = (n) => {
	// Do not use !, &&, or ||
    return convert(NAND(n, n));
};

/*
 *      AND
 *      ===
 * A  |  B  | OUT
 * ---|-----|----
 * 0  |  0  |  0
 * 1  |  0  |  0
 * 0  |  1  |  0
 * 1  |  1  |  1
 * --------------*/
const AND = (x, y) => {
    // Do not use &&, ||, or !
    // You can use any of the functions that you have already written
    return convert(NOT(NAND(x,y)));
};

/*
 *      OR
 *      ==
 * A  |  B  | OUT
 * ---|-----|----
 * 0  |  0  |  0
 * 1  |  0  |  1
 * 0  |  1  |  1
 * 1  |  1  |  1
 * --------------*/
const OR = (x, y) => {
    // Do not use ||, &&, or !
    // You can use any of the functions that you have already written
    return convert(NAND(NOT(x),NOT(y)));
};

/*
 *      XOR
 *      ===
 * A  |  B  | OUT
 * ---|-----|----
 * 0  |  0  |  0
 * 1  |  0  |  1
 * 0  |  1  |  1
 * 1  |  1  |  0
 * --------------*/
const XOR = (x, y) => {
    // Do not use ||, &&, or !
    // You can use any of the functions that you have already written
    return convert(AND(NAND(x, y), OR(x, y)));
    // return convert(OR(AND(x, NOT(y)), AND(NOT(x), y)))
};


console.log('NAND');
console.log(NAND(0,0)); // 1
console.log(NAND(0,1)); // 1
console.log(NAND(1,0)); // 1
console.log(NAND(1,1)); // 0

console.log('\nNOT');
console.log(NOT(0)); // 1
console.log(NOT(1)); // 0

console.log('\nAND');
console.log(AND(0,0)); // 0
console.log(AND(0,1)); // 0
console.log(AND(1,0)); // 0
console.log(AND(1,1)); // 1

console.log('\nOR');
console.log(OR(0,0)); // 0
console.log(OR(0,1)); // 1
console.log(OR(1,0)); // 1
console.log(OR(1,1)); // 1

console.log('\nXOR');
console.log(XOR(0,0)); // 0
console.log(XOR(0,1)); // 1
console.log(XOR(1,0)); // 1
console.log(XOR(1,1)); // 0
