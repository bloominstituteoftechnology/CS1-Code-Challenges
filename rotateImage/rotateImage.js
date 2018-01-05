// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateImage = (matrix) => {
  const newArr = [];
  for (i = 0; i < matrix.length ; i++) {
    const tempArr = [];
    for (j = matrix.length - 1; j >= 0; j--) {
      tempArr.push(matrix[j][i]);
    }
    newArr.push(tempArr);
  }
  return newArr;
}
