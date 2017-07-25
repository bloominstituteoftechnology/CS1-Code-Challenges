/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 * For division just drop the remainder.
 */

 const multiply = (a, b) => {
  let answer = 0;
  for (let i = 0; i < b; i++) {
    answer += a;
  }
  return answer;
 }


 const divide = (a, b) => {
  let answer = 0;
  answer += a;
  let counter = 0;
  for (let i = 0; i < a; i++) {
    answer -= b;
    if (answer < 0) return counter;
    if (answer === 0) return counter + 1;
    counter += 1; 
  }
 }

  const modulo = (a, b) => {
  let answer = 0;
  answer += a;
  for (let i = 0; i < a; i++) {
    if(answer - b === 0) return 0;
    if (answer - b < 0) return answer;
    answer -= b;
  }
 }
 // console.log(modulo(23, 4));
