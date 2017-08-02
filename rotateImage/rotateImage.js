// cc18 rotateImage

// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?

/*
INPUT: (9x9 image matrix)
const exampleImageArray = [
  [ 0. 1. 2. 3. 4. 5. 6. 7. 8. 9 ],
  [ 0. 1. 2. 3. 4. 5. 6. 7. 8. 9 ],
  [ 0. 1. 2. 3. 4. 5. 6. 7. 8. 9 ],
  [ 0. 1. 2. 3. 4. 5. 6. 7. 8. 9 ],
  [ 0. 1. 2. 3. 4. 5. 6. 7. 8. 9 ],
  [ 0. 1. 2. 3. 4. 5. 6. 7. 8. 9 ],
  [ 0. 1. 2. 3. 4. 5. 6. 7. 8. 9 ],
  [ 0. 1. 2. 3. 4. 5. 6. 7. 8. 9 ],
  [ 0. 1. 2. 3. 4. 5. 6. 7. 8. 9 ],
]

FUNCTION: 90 degree clockwise rotation

OUTPUT:
[
  [ 0. 0. 0. 0. 0. 0. 0. 0. 0 ],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
  [ 2, 2, 2, 2, 2, 2, 2, 2, 2 ],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
  [ 4, 4, 4, 4, 4, 4, 4, 4, 4 ],
  [ 5, 5, 5, 5, 5, 5, 5, 5, 5 ],
  [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
  [ 7, 7, 7, 7, 7, 7, 7, 7, 7 ],
  [ 8, 8, 8, 8, 8, 8, 8, 8, 8 ],
  [ 9, 9, 9, 9, 9, 9, 9, 9, 9 ],
]

*/
