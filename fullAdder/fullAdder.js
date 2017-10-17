/* fullAdder.js */

/*
Construct a four bit full adder. You  must use the provided NAND function to
create any other logic gates you require to make a 4 bit full adder. x and y
will come in  array format where [true,  true, true, true] ===  1111 === 15.
The expected return is an array with length 5.

Each index in the array  is just a wire that can be on  or off. That will be
represented by boolean true or false.

I suggest  writing a halfAdder first,  then fullAdder, but you  will only be
tested on the fullAdder4.
*/

function NAND(x, y) {
  return (!x || !y);
}

function XOR(x, y) {
  const n1 = NAND(x, y);
  const n2 = NAND(x, n1);
  const n3 = NAND(n1, y);
  return NAND(n2, n3);
}

function AND(x, y) {
  const n1 = NAND(x, y);
  return NAND(n1, n1);

}

function OR(x, y) {
  const n1 = NAND(x, x);
  const n2 = NAND(y, y);
  return NAND(n1, n2);
}

function halfAdder(x, y) {
  const sum = XOR(x, y);
  const c   = AND(x, y);
  return [sum, c];
}

function fullAdder(x, y, cIn=0) {
  const ha1 = halfAdder(x, y);
  const sum1 = ha1[0];
  const c1 = ha1[1];

  const ha2 = halfAdder(sum1, cIn);
  const sum2 = ha2[0];
  const c2 = ha2[1];

  const cOut = OR(c1, c2);

  return [sum2, cOut];
}

function fullAdder2(a, b, cIn=0) {
  const fa1 = fullAdder(a[1], b[1], cIn);
  const fa2 = fullAdder(a[0], b[0], fa1[1]);

  return [fa2[0], fa1[0], fa2[1]];
}

function fullAdder4(a, b) {
  const fa21 = fullAdder2([a[2], a[3]], [b[2], b[3]])
  const fa22 = fullAdder2([a[0], a[1]], [b[0], b[1]], fa21[2]);

  return [fa22[2], fa22[0], fa22[1], fa21[0], fa21[1]]
}

Console.log(fullAdder4([1,1,0,1],[1,1,1,1])) // [1,1,1,0,0]
