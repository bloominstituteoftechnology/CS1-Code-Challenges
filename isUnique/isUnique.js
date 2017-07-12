// one liner -> BABAM!!! (please see playground.js for a full synopsis)
const isUnique = str => new Set(str).size === str.split('').length;

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false