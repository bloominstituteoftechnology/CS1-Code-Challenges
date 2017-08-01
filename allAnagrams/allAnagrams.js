/**
 * Given a  single input  string, write a  function that  produces all
 * possible anagrams  of a  string and  outputs them  as an  array. At
 * first, don't worry about repeated strings.  What time complexity is
 * your solution?
 *
 * Extra credit: Deduplicate your return array.
 */

/**
  * example usage:
  * const anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

/** This algorithm  utilizes a recursive  tree structure to  avoid any
  * duplicate strings; the constructor creates  a new object, and then
  * recursively solves  the anagram by dividing  (using 'divide()' the
  * string  into  smaller  and  smaller pieces,  storing  each  single
  * character in  a node with  the remaining string,  then recursively
  * doing the  same for the  remaining string.  After it  has finished
  * splitting  the  string into  individual  nodes,  it then  produces
  * (using 'produce()') all of the  anagrams by walking each branch of
  * the tree and collecting individual  letters; when it has reached a
  * tip of a  branch, it stores the anagram in  the answer property of
  * the root (an array of answers) to be returned at the end.
  */

class Anagram {
  constructor(string, letter = null) {
    this.string = string;
    this.letter = letter;
    this.children = [];
    this.answer = [];
    this.divide();
    this.produce();
  }

  // divide() recursively  splits the  string into  a tree  of objects
  // containing a letter and the remaining string
  divide() {
    // create a new tree branch for each character in the string, with
    // the remaing string, and then create children from the remaining
    // string's characters, etc., producing a big tree.
    const arr = this.string.split('');
    arr.forEach(l => {
      const rest = arr.filter(x => x !== l).join('');
      // create a new node with an individual letter and the remaining
      // string; when Anagram's constructor  is called, it recursively
      // breaks the string  into smaller and smaller  pieces, and then
      // produces an answer, which is pushed onto the answer property.
      const anagram = new Anagram(rest, l);
      this.children.push(anagram);
    });
  }

  // recursively runs  through all  branches of  the tree  picking out
  // single letters and catenating them together to produce anagrams
  produce(a = this, b = null) {
    if (a.letter) {
      b = b ? b.concat(a.letter) : a.letter;
    }
    if (a.children.length) {
      a.children.forEach(aa => {
        return this.produce(aa, b ? b : null)
      });
      return this.answer;
    }
    this.answer.push(b);
  }
}

// acts as main(), returning the answers in an array
function allAnagrams(s) {
  return (new Anagram(s)).answer;
}

const anagrams = allAnagrams('abc');
console.log(anagrams);
const abcd = allAnagrams('abcd');
console.log(abcd);
