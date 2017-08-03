// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateMatrixCounter = (matrix) => {
  const size = matrix.length - 1;
  const newMatrix = [];
  for (let i = 0; i <= size; i++) {
    let arr = [];
    for (let j = size; j >= 0; j--) {
      arr.push(matrix[i][j]);
    }
    newMatrix.push(arr);
  }
  return newMatrix;
}

const rotateMatrixClockwise = (matrix) => {
  const size = matrix.length - 1;
  const newMatrix = [];
  for (let i = size; i >= 0; i--) {
    let arr = [];
    for (let j = 0; j <= size; j++) {
      arr.push(matrix[i][j]);
    }
    newMatrix.push(arr);
  }
  return newMatrix;
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(rotateMatrixClockwise(matrix)); --> It works!
// console.log(rotateMatrixCounter(matrix)); --> this works too!

// made this accidentally, decided to keep it
const mirrorImage = (matrix) => {
  const size = matrix.length - 1;
  const newMatrix = [];
  for (let i = size; i >= 0; i--) {
    let arr = [];
    for (let j = 0; j <= size; j++) {
      arr.push(matrix[j][i]);
    }
    newMatrix.push(arr);
  }
  return newMatrix;
}
