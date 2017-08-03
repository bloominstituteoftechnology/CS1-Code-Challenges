// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?

const rotate = function(matrix) {
  // reverse the rows
  matrix = matrix.reverse();
  // console.log(matrix);
  // swap the elements
  for (let i = 0; i < matrix.length; i++) {
    // console.log('i: ' + i);
    for (let j = 0; j < i; j++) {
          // console.log('j: ' + j);
      var temp = matrix[i][j];
      // console.log('temp: '+temp)
      // console.log('matrix[j][i]: '+matrix[j][i]);
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
};

const original = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(rotate(original));
