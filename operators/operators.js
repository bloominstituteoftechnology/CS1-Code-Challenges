/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
 */

const multiply = (x, y) => {
	let product = x;
	if (x > y) {
		for (i = 1; i < y; i++)
			product += x;
	} else {
		for (i = 1; i < y; i++)
			product += x;
	}
	return product;
};

const divide = (x, y) => {
	let quotient = 0;
	let runningTotal = x;
	while (runningTotal - y >= 0) {
		runningTotal -= y;
		quotient++;
	}
	return quotient;
};

const modulo = (x, y) => {
	let remainder = x;
	while (remainder - y >= 0) {
		remainder -=y;
	}
	return remainder;
};
