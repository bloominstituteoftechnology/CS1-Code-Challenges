// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

for (var i = 1; i <= 10; i++) {
	const x = i;
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(x);
	}, 0);
}

// I'm not sure why it doesn't print 1 - 10, but when JS bin mentioned not 
// to use functions within for loops, I looked it up (not sure if that was
// cheating...sorry), and found something to the effect of the function only
// running once so it only uses the last iteration of i.  So, I thought I
// could just try using a different variable to represent what i is at the
// time to see if it would print 1 - 10, and it worked.  I'm still not 
// quite sure why, though.
