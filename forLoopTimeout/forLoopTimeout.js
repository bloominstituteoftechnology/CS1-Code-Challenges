// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

for (var i = 1; i <= 10; i++) {
  countup(i);
}

 function countup(i) { 
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0);
}

/* it's because the variables passing in don't keep their intial values.
/* it needs to be set within a function. */

// second solution uses anonymous functions
for (var i = 1; i <= 10; i++) {
  (function(n){
    setTimeout(function(){
      console.log(n);
    }, 0)
  }(i));
}