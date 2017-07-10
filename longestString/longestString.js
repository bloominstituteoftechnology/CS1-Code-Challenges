/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

/* Take the first array item and put it in a "holding" array.
 * Compare it to the next anArray, put the bigger of the two in the holding array.
 */

// testanArray = ['fred', 'ted', 'bob', 'alice', 'joe', 'arnold', 'mary', 'jebedaiah', 'ed', 'zachahurres', 'mae', 'antidisestablishmentarianism']

const bigString = function (anArr) {
  const holdBig = [anArr[0]];
  for (let i = 0; i < anArr.length; i++) {
    if (holdBig[0].length < anArr[i].length) {
      holdBig.pop();
      // console.log(anArr[i]);
      holdBig.push(anArr[i]);
    };
  };
  return holdBig[0];
};

// console.log(bigString(testanArray));
