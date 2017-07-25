// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

for (var i = 1; i <= 10; i++) {
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0);
}

/*
 The variable i is being passed by reference into setTimeout and not the actual value. After 10 seconds the value of i has already been 
 incremented to 11 and passed to console.log().
 The function only executes one time after the provided time interval expires and by that time the i value has already finished it's increments which causes setTimeout to be passed 11.
*/


/* 

  Fix 1
  setTimeout() needs to receive the actual value of i and not the reference after each iteration of the for loop
  
  for (var i = 1; i <= 10; i++) {
    setTimeout(function(i) { 
      return function() { 
        console.log(i); 
    }; }(i), 0*i);
  }
  

  Fix 2
  Change var to let so the value of i is constantly changing
  
  for (let i = 1; i <= 10; i++) {
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0);
  }
*/