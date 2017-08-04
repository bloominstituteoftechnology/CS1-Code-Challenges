/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
 */
 const multiply = (x, y) => {
     if (x === 1)
      return(y)
   else
      return(y + multiply(x-1, y));
 };

const divide = (x, y) => {
  if (x === y) 
   return (1);
  else  {
    return  (y - divide (x-1, y));
  }
};
 const modulo = (x, y) => {
   return x % y
 };
 console.log(multiply (5,4));
 console.log(divide (20, 5));
 console.log(modulo (10, 3));
