// https://repl.it/student/assignments/367850/model_solution?fromSubmissionId=1521337
//

function sumAndProduct(sum, product) {
  for (let i = 0; i <= sum / 2; i++) {
    if (i * (sum - i) === product) return [i, (sum - i)];
  }
  return null;
}
