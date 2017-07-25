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
     this.key = 0;
   }
   push(value) {
     this.array[this.key] = value;
     this.key += 1
   }
   pop() {
     const value = this.array[this.key - 1];
     delete this.array[this.key - 1];
     this.key -= 1;
     return value;
   }
   get(index) {
     //console.log(index);
     return this.array[index];
   }
   delete(index) {
    delete this.array[index];
     for (let i = index; i < this.key; i++) {
       this.array[i] = this.array[i + 1];
     }
     this.key--;
   }
 }

 const a = new Array();
 a.push(5);
 a.push(53);
 a.push(54);
 console.log(a);
 a.delete(0);
 console.log(a);
