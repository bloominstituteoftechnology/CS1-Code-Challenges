
function NAND(x, y) {
  return (!x || !y);
}

const NAND_truth = [
	[false,false,true],
	[false,true,true],
	[true,false,true],
	[true,true,false]
];

function XOR(x, y) {
    const n = NAND(x, y)
    return NAND(NAND(x,n), NAND(n, y))
}

const XOR_truth = [
    [false,false,false],
    [false,true,true],
    [true,false,true],
    [true,true,false]
];

function AND(x,y) {
    const n = NAND(x, y);
    return NAND(n, n);
}

const AND_truth = [
    [false,false,false],
    [false,true,false],
    [true,false,false],
    [true,true,true],
]

function OR(x, y) {
    const n1 = NAND(x, x);
    const n2 = NAND(y, y);
    return NAND(n1, n2);
}

const OR_truth = [
    [false,false,false],
    [false,true,true],
    [true,false,true],
    [true,true,true]
];

function NOT(x) {
    return !x;
}

const NOT_truth = [
    [false,true],
    [true,false]
];

tester(NAND, NAND_truth);
tester(XOR, XOR_truth);
tester(AND, AND_truth);
tester(OR, OR_truth);
tester(NOT, NOT_truth);

function halfAdder(a, b) {
    return [AND(a[0], b[0]), XOR(a[0], b[0])];
}

halfAdder_truth = [
    [[false],[false],[false,false]],
    [[false],[true],[false,true]],
    [[true],[false],[false,true]],
    [[true],[true],[true,false]]
]

tester(halfAdder, halfAdder_truth);

function fullAdder(c, a, b) {
    const ha1 = halfAdder(a[0], b[0]);
    if (b[0] === true) process.exit();
    const ha2 = halfAdder(c[0], ha1[1]);
    const cOut = OR(ha1[0], ha2[0]);
    
    return [cOut, ha2[1]];
}

const fullAdder_truth = [
    [[false],[false],[false],[false,false]],
    [[false],[false],[true],[false,true]],
    [[false],[true],[false],[false,true]],
    [[false],[true],[true],[true,false]],
    [[true],[false],[false],[false,true]],
    [[true],[false],[true],[true,false]],
    [[true],[true],[false],[true,false]],
    [[true],[true],[true],[true,true]]
];

tester(fullAdder, fullAdder_truth);

function deepEquals (a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
	return a.every((e,i) => deepEquals(e, b[i]))
    }
    else return a === b;
}

function tester(fn, truth) {
    console.log(`testing ${fn}`);
    truth.forEach(e => {
	const args = e.slice(0, e.length - 1);
	const exp = e[e.length - 1];
	const ans = fn.apply(null, args);
	if (deepEquals(ans, exp))
	    return
	else {
	    console.log(`args: ${args}`);
	    console.log(`expected: ${exp}`);
	    console.log(`got: ${ans}`);
	    console.log();
	}
    });
    console.log();
}

