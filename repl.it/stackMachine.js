/*
Stack Machine

A stack machine is a simple system that performs arithmetic operations on an
input string of numbers and operators. It contains a stack that can store an
arbitrary number of 12-bit unsigned integers. Initially the stack is
empty. The machine processes a string of characters in the following way:

	the characters of the string are processed one by one;

        if the current character is a digit [0-9], the machine pushes the
        value of that digit onto its stack;

        if the current character is +, the machine pops the two topmost
        values from its stack, adds them and pushes the result onto the
        stack;

        if the current character is *, the machine pops the two topmost
        values from its stack, multiplies them and pushes the result onto
        the stack;

        after the machine has processed the whole string it returns the
        topmost value of its stack as the result;

        the machine reports an error if any operation it performs (addition
        or multiplication) results in an overflow;

        the machine reports an error if it tries to pop an element from its
        stack when the stack is empty, or if the stack is empty after the
        machine has processed the whole string.
*/

function stackMachine(str) {
  if (str.length > 200000) return -1;

  const stack = [];
  const DIGITFN = /[+*0-9]/;
  const fn = {
    '+': (a,b) => { return a + b },
    '*': (a,b) => { return a * b }
  }
 
  const parser = s => {
    if (s === '') { // base case
      const ans = stack.pop();
      return ans ? parseInt(ans) : -1;
    }

    const nextElem = s[0];
    if (nextElem.match(DIGITFN)) { // switch on +, *, or digit
      switch (nextElem) {
      case ('+'): // treat +, * equally
      case ('*'):
        const a = parseInt(stack.pop());
        const b = parseInt(stack.pop());
        if (!a || !b) return -1;
        const c = fn[nextElem](a,b).toString();
        stack.push(c);
        break;

      default: // guaranteed to be a digit
        stack.push(nextElem);
        break;
      }
    }
    else { // nextElem must be one of +, *, or digit or it is an error
      return -1;
    }
    return parser(s.slice(1));
  }

  return parseInt(parser(str));
}

S = "13+62*7+*";

console.log(stackMachine(S));
console.log(stackMachine('11++'));
