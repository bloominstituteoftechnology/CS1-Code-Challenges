function deepEquals (a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
	return a.every((e,i) => deepEquals(e, b[i]))
    }
    else return a === b;
}

console.log(deepEquals(1, 1) === true);
console.log(deepEquals(1, 0) === false);
console.log(deepEquals([1], [1]) === true);
console.log(deepEquals([1], [0]) ===  false);
console.log(deepEquals([0,1], [0,1]) === true);
console.log(deepEquals([0,1], [0,2]) === false);
console.log(deepEquals([[0,1],[2,3]],[ [0,1],[2,3]]) === true);
console.log(deepEquals([[0,1],[2,3]],[ [0,1],[2,4]]) === false);

function tester(fn, truth) {
    truth.forEach(e => {
	const args = e.slice(0, e.length - 2);
	const exp = e[e.length - 1];
	const ans = fn(args);
	if (deepEquals(ans, exp))
	    return
	else {
	    console.log(`args: ${args}`);
	    console.log(`expected: ${exp}`);
	    console.log('got: ${ans}`);
	}
    });
}
