/* Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * get and delete should accept an index and get or remove the item at that index.
 * Make sure to shift the array items after deleting an item.
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure, that's cheating :)
 * How do these operations compare to that of a linked list?
 * How does the time complexity of insertion and deletion compare to that of a linked list?
 */
class Array {
  constructor(item) {
    this[0] = item;
  }

  length(){
    let counter = 0;	  
    for (key in this) {
      counter++;
    }
    return counter;
  }

  push(item){
    this[this.length] = item;
  }

  pop(// I know you are going to try to put something in these parentheses - Don't do it
    ){
    for (key in this) {
      if (this.key === this.length) {
        delete this.key;
      }
    }
  }

  get(index){
    for (key in this) {
      if (this.key === index) {
        return this.value;
      }
    }
  }

  delete(index){
    // make sure to shift the items after deletion
  }

}

//**************************************************************************************************
// Check if constructor works
// const arr = new Array('first');
// console.log(arr);
// Check if push works (builds on constructor working test)
// arr.push('second');
// arr.push('third');
// arr.push('fourth');
// console.log(arr);
// ***********************Leave this arr for remaining tests
// check if length works
const arr = {
  0: 'first',
  1: 'second',
  2: 'third',
  3: 'fourth',
}
// *****************************************
console.log(arr.length); // 4
// check if push works 
// arr.push('fifth');
// console.log(arr);
// check if pop works
// arr.pop();
// console.log(arr);
// test get(index)
// console.log(arr.get(2)); // third
// test delete 
// arr.delete(2);
// console.log(arr);
