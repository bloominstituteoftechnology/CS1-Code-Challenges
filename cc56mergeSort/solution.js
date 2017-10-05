// https://repl.it/student/assignments/458240/model_solution?fromSubmissionId=1746465
//

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2); //2
  const leftArray = arr.slice(0, mid); //[3, 2]
  const rightArray = arr.slice(mid);//[1, 0, -1]

  const merge = (leftArray, rightArray) => {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        mergedArray.push(leftArray[leftIndex]);
        leftIndex++;
        continue;
      }
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
    return mergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
  };

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
