/*
 *  * Find the first item that occurs an even number of times in an array.
 *   * Remember to handle multiple even-occurance items and return the first one.
 *    * Return null if there are no even-occurance items.
 *    */

/*
 *  * example usage:
 *   * const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
 *    * console.log(onlyEven); //  4
 *    */

const evenOccurence = (arr) => {
  // Your code here.
  // Create search fn
  const findMyFriends = (arr, target, index) => {
    const friends = [];
    let idx = arr.indexOf(arr[index]);
    while (idx !== -1) {
      friends.push(idx);
      idx = arr.indexOf(arr[index], idx + 1);
    }
    
  }
  // Iterate arr
  for (let i = 0; i < arr.length; i ++) {
    // Check if 
  }
};
