// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

for (let i = 1; i <= 10; i++) {
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0);
}


//so the let variable keeps the scope of the variable i within the for loop (it's not hoisted)and the value
//of i is available to the function each time it is called (think closure). If the i is set as a var, the
//setTimeout function does not have access to it like  a closure so the behaviour is different. why it's 11 ?
// i'm going to have to tune in for the video :)
