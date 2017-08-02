// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?

class Matrix_Rotate {
  constructor(matrix) {
    this.matrix = matrix
    this.rotated_matrix = this.rotate();
  }
  rotate() {
    // initialize an array of rotated dimensions
    const rotated_matrix = new Array(this.cols);
    const columns = new Array(this.rows).fill(undefined);
    for (let x = 0; x < this.cols; x++) {
      rotated_matrix[x] = columns.slice(); // need a fresh reference for each row
    }

    // fill the rotated array and return it
    for (let r1 = 0, c2 = 0; r1 < this.rows; r1++, c2++) {
      for (let c1 = 0, r2 = 0; c1 < this.cols; c1++, r2++) {
        rotated_matrix[r2][c2] = this.matrix[r1][c1];
      }
    }
    return rotated_matrix;
  }

  // row and col getters
  get rows() {
    return this.matrix.length;
  }
  get cols() {
    return this.matrix[0].length;
  }

  // logging functions
  // simple array displays
  get the_matrix() {
    console.log(this.matrix);
  }
  get the_rotated_matrix() {
    console.log(this.rotated_matrix);
  }
  // pretty-printed arrays
  log_the_matrix() {
    this.the_matrix;
    this.log_matrix(this.matrix);
  }
  log_the_rotated_matrix() {
    this.the_rotated_matrix;
    this.log_matrix(this.rotated_matrix);
  }
  // helper function for pretty-printing
  log_matrix(m) {
    for (let r = 0; r < m.length; r++) {
      let row = '';
      for (let c = 0; c < m[r].length; c++) {
        row += `${m[r][c]}, `;
      }
      console.log(row);
    }
    console.log('\n');
  }
}


// Data
const raw_matrix1 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10, 11],
];

const raw_matrix2 = [
  [1, 2, 3]
];


// Tests
const matrix1 = new Matrix_Rotate(raw_matrix1);
matrix1.log_the_matrix();
matrix1.log_the_rotated_matrix();

const matrix2 = new Matrix_Rotate(raw_matrix2);
matrix2.log_the_matrix();
matrix2.log_the_rotated_matrix();
