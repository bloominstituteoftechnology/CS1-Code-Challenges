// FINAL AMAZING SOLUTION
const isUnique = str => new Set(str).size === str.split('').length;

// TEST CASES
console.log(isUnique('abcdhijklmnopqrstuv'));
console.log(isUnique('abcdefga'));

/**
- IMPLEMENTATION OF "Set" FOUND ON THE INTERNET -

 * let fruits = ['apple','banana','orange','apple','mango','banana'];
 * let fruits_without_duplicates = Array.from(new Set(fruits));
 * console.log(fruits_without_duplicates); //=> ["apple", "banana", "orange", "mango"]

- TESTING: ROUND 1 -
// let dumb = [1,2,3,4,1,2,3,4,1,2,2,2,2,2,2,3,4,5,6];

// let smart = new Set(dumb);
// console.log(smart); //=> Set {1,2,3,4,5,6}

// let crazy = typeof smart;
// console.log(crazy); //=> object

// console.log(Object.keys(smart)); //=> [] ?
// console.log(Object.values(smart)); //=> [] ???
// console.log(Object.prototype.constructor(smart)); //=> Set {1,2,3,4,5,6} ?!?!?!?!?!? We must investigate this

- RESEARCH PHASE -
 * IN GOOGLE CHROME CONSOLE:
 * let dumb = [1,2,3,4,1,2,3,4,1,2,2,2,2,2,2,3,4,5,6];
 * let smart = new Set(dumb);
 * console.log(smart); //=> Set {1,2,3,4,5,6}
 * 
 * //==>
 * Set(6) {1, 2, 3, 4, 5…}
 * size: (...)
 * __proto__: Set
 * [[Entries]]: Array(6)
 * > 0: 1
 *    value: 1
 * > 1: 2
 *    value: 2
 * > 2: 3
 *    value: 3
 * > 3: 4
 *    value: 4
 * > 4: 5
 *    value: 5
 * > 5: 6
 *    value: 6
 * length: 6
 * 
 * ME: ..???????????????????????????????????????????????????
 * 
 * smart.forEach(x => console.log(x))
 * //=>
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 
 * ME: Hmmmmm...
 * 
 * Google [what is a set in JavaScript]
 * 
 * MDN
 * Definition:
 * The Set object lets you store unique values of any type,
 * whether primitive values or object references.
 * 
 * Syntax:
 * new Set([iterable]);
 * 
 * Parameters
 * "iterable"
 * If an iterable object is passed, all of its elements will
 * be added to the new Set. If you don't specify this parameter,
 * or its value is null, the new Set is empty.
 * 
 * ME: So, Set is some kind of weird super-optimized linked 
 * list/object/array hybrid?
 * 
 * Properties:
 * .size: returns the number of values in the object
 * 
 * ME: Mmmmhmm
 * 
 * Methods
 * .add(value): appends a new element with the given value to the
 * set object
 * 
 * ME: Yep.
 * 
 * .entries(): returns a new iterator object that contains an array
 * of [value, value] for each element in the set object, in insertion
 * order
 * 
 * ME: Uh huh
 * 
 * .has(value): returns a boolean asserting whether an element is
 * present with the given value in the set object or not
 * 
 * ME: THIS IS SOMEKIND OF WEIRD HYBRID LINKED LIST!
 * 
 * time for more testing...

- TESTING: ROUND 2 -

// some data
const dumbTrueString = 'abcdhijklmnopqrstuv';
const dumbFalseString = 'abcdhijkhfgslglajd;hfvvvvkdhllyjsljhslmnopqrstuv';

const smartFalseString = new Set(dumbFalseString);
console.log(smartFalseString)

console.log(smartFalseString.size) //=> 23
console.log(dumbFalseString.split('').length) //=> 48

const smartTrueString = new Set(dumbFalseString);
console.log(smartTrueString.size); //=> 19
console.log(dumbTrueString.split('').length) //=> 19

ME: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

back to the top for the solution!
*/
