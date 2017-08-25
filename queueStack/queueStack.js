/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */
 class Stack {
 	constructor() {
 		this.stack = [];
		 this.size = 0;
 	}
	 add(x) {
		 this.stack.push(x);
		 this.size = this.size++;
	 }
	 remove() {
		 if(this.size > 0) {
			 this.size = this.size--;
		 }
		 return this.stack.pop();
	 }
     size() {
       this.size = 0;
     }
 }

 const stack = new Stack;

stack.add(25);
stack.add(5);
stack.add(2);
stack.add(252);
stack.add(255);
console.log(stack);
stack.remove()
console.log(stack);
