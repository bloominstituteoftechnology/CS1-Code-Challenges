// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?

/**
 *   0 1 2             6 3 0      
 *   3 4 5    ===>     7 4 1
 *   6 7 8             8 5 2
 */


const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    console.log(matrix);
    
    function rotate(matrix, len) {
      var n = len;
      var temp;
      
      for(var i = 0; i < n/2; i++) {
        for(var j = i; j < n-i-1; j++) {
          temp = matrix[i][j];
          matrix[i][j] = matrix[j][n-i-1];
          matrix[j][n-i-1] = matrix[n-i-1][n-j-1];
          matrix[n-i-1][n-j-1] = matrix[n-j-1][i];
          matrix[n-j-1][i] = temp;
        }
      }
      
      return matrix
    }
    console.log(rotate(matrix, matrix[0].length));