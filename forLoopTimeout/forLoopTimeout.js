// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

for (var i = 1; i <= 10; i++) {
  (function(i) {
    let timeToStart = i;
    setTimeout(function() {
      // From looking at the code you would assume it would print 1 - 10
      // It doesn't.  Why?  How can you make it print 1 - 10.
      console.log(i);
    }, timeToStart);
  })(i)
}

// Wrap it in a self-executing function and add a pause so it isn't happening all at the same time.

// has nothing to do with timing, has to do with closure, with var i is not in closure, let keeps i in closure, 
