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
     this.array = {};
     this.length = 0;
   }

   push() {
     this.array[this.length];
     this.length++;
   }
   pop() {
     delete this.array[this.length-1];
     this.index--;
     return this.array[this.length-1];
   }
   get(index) {
     return this.array[index];
   }
   delete(index) {
     delete this.array[index];
     for (let i = index; i <= this.length; i++) {
       this.array[i] = this.array[i + 1];
     }
     this.length--;
   }
 }

 const array = new Array(3);
 array.push(1);
 array.push(3);
 array.push(5);
 array.push(7);
 console.log(array);
 console.log(array.get(2));
 console.log(array.delete(0));
