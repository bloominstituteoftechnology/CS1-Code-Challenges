class Array {
  constructor() {
    this.arr = {};
    this.length = 0;
  }
  push(item) {
    this.arr[this.length] = item;
    this.length++;
  }
  pop() {
    const byebye = this.arr[this.length - 1];
    delete this.arr[this.length - 1];
    this.length--;
    return byebye;
  }
  getIndex(hi) {
    return this.arr[hi];
  }
  deleteIndex(bye) {
    delete this.arr[bye];
    for (let i = bye; i < this.length; i++) {
    	this.arr[i] = this.arr[i + 1];
    }
    this.length--;
  }
}

// const myArr = new Array();
// myArr;
// myArr.push(7);
// myArr.push(6);
// myArr.push(5);
// myArr.push(4);
// myArr.getIndex(0);
// myArr;
// myArr.pop();
// myArr;
// myArr.deleteIndex(1);
// myArr;