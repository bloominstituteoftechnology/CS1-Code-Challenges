// Write a function called commonElements that has the parameters for two arrays.  Return an array of all items that are present in both arrays.  Do not modify the arrays that are passed in.
function commonElements(arr1, arr2){
  const common = new Set();
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
       if (arr[i] === arr2[j]) {
         common.add(arr1[i]);
        }
     }
  }
  return Array.from(common);
}


// "Model answer":
// function commonElements(arr1, arr2) {
//   const matches = [];
//   arr1.forEach(element => {
//     if (arr2.includes(element)) {
//       matches.push(element);
//     }
//   }
//   return matches;
// }
