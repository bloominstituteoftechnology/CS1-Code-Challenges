/* 
* Implement an algorithm to determine if a string has all unique characters.
* Extra Credit - Answer this question - What if you cannot use additional data structures?
*/

const isUnique = (str) => {
    const set = new Set();
    const checkSet = (i = 0) => {
	if (i === str.length) return true;
	if (set.has(str[i])) return false;
	set.add(str[i]);
	return checkSet(++i);
    }
    return checkSet();
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false

/*
If you cannot use additional datastructures, then sort the string and search for
duplicate letters next to each other.
*/
