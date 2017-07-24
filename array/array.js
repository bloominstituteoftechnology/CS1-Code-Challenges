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
   constructor() {
     const array = [];
   }

   push() {
     return this.index++;
   }
   pop() {
     return this.index--;
   }
   get(index) {
     return this.array[index];
   }
   delete(index) {
     if (this.index === index) {
       this.index = this.index - 1;
     }
     return this.array.shift();
   }
 }

 const array = new Array;
 array.push(1);
 array.push(3);
 array.push(5);
 array.push(7);
 console.log(array);
 console.log(array.get(2));
 console.log(array.delete(0));
