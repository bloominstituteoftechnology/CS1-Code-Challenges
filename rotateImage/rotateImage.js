// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?
const rotateImage = (mat) => {
    mat = [
        [a, b],
        [c, d]
    ];
    const newmat = [];
    let len = (mat.length);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j< len; j++) {
            newmat = mat[i][j];
        }
    }
    console.log(newmat);
}