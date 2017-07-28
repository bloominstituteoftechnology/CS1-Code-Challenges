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
