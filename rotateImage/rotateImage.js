// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?

// This really depends on how the matrix is given to us as data. Right now I'm going to assume it's given to us as an array of arrays

// [[1, 2], [3, 4]] would be the a matrix with 1 and 2 on top and 3 and 4 on bottom. 2x2 matrix

// going to have to map. 

const rotateImage = (matrix) => {
  const rotated = [];
  for (let i = matrix.length - 1; i > - 1; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === matrix.length - 1) {
        rotated.push([matrix[i][j]]);
      } else {
        rotated[j].push(matrix[i][j]);
      }
    }
  }
  return rotated;
}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(rotateImage(matrix));