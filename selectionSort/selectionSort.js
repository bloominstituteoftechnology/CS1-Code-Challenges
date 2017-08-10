/*
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */

const selectionSort = (arr) => {
  const arrst = Array.from(arr);
    for(let i = 0; i < arr.length-1 ; i++){
      let min = i;
      for(let j = i+1; j < arr.length; j++) { 
       if(arrst[j] < arrst[min]){
         min = j;
       }
       
      }
        [arrst[i], arrst[min]] = [arrst[min], arrst[i]]
    }
      return arrst;
};
  
const myArray = [1, 0, 2, 5, 7, 9, -1 ];

console.log("Original array: " + myArray);
let sortedArray = selectionSort(myArray);
console.log("Sorted array: " + sortedArray);