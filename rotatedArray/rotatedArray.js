/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(n))
 */

 const rotatedArraySearch = (arr, target) => {
     let leftEndpint = 0;
     let rightEndpoint = arr.length - 1;

     while (leftEndpint <= rightEndpoint) {
         let midPoint = Math.floor((leftEndpint + rightEndpoint) / 2);
         if (arr[midPoint] === target) {
             return midPoint;
         }
         if (arr[leftEndpint] < arr[midPoint]) {
             if (arr[leftEndpint] <= target && target < arr[midPoint]) {
                 rightEndpoint = midPoint - 1;
             } else {
                 leftEndpint = midPoint + 1;
             }
         } else {
             if (arr[midPoint] <= target && target < arr[rightEndpoint]) {
                 leftEndpint = midPoint + 1;
             } else {
                 rightEndpoint = midPoint - 1;
             }
         }
     }
     return null;
 }

 console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)); // 5
 
 console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)); // null

 console.log(rotatedArraySearch([4, 5, 6, 7, 1, 2, 3, ], 7)); // 3