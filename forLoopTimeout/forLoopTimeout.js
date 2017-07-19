// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

// The problem is that var is at global scope, and the function has been
// primed by full iterations before it is invoked, and so i remains at its
// final value.
for (var i = 1; i <= 10; i++) {
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0);
}


// The ES6 solution is to change the var to let; the i will be initialized to a new
// value on each iteration.
for (let i = 1; i <= 10; i++) {
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0);
}

// The ES5 solution is to isolate the Timeout function by inserting a function and
// invoking it with the var i; the Timeout function will get a new i every time.
for (var i = 1; i <= 10; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i); }, 0);
  })(i)
}
