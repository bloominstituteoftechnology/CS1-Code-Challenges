// https://repl.it/student/assignments/351164/model_solution?fromSubmissionId=1498763

function collatzSequence(n) {
  let m = n;
  const arr = [m];
  while (m !== 1) {
    // m = m % 2 === 0 ? m / 2 : m * 3 + 1;
    if (m % 2 === 0) {
      m /= 2;
    } else {
      m = (m * 3) + 1;
    }
    arr.push(m);
  }
  return arr;
}
