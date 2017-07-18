// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

// The problem is that the funciton is being called within the for loop, when the for loop should be
// within the function.

setTimeout(function() {
  for (var i = 1; i <= 10; i++) {
	console.log(i), 0;
  }
});