/* 
 * deepEquals.js
 *
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the contents of the two objects are equal
 * for all keys and sub-keys.
 */

function deepEquals(obj1, obj2) {
  const UNDEF = 'undefined';
  const BOOL = 'boolean';
  const NUMBER = 'number';
  const STRING = 'string';
  const SYMBOL = 'symbol';
  const FUNCTION = 'function';
  const OBJECT = 'object';

  const checkDeepEquals = (o1, o2) => {
    if (typeof o1 !== typeof o2) return false;

    switch (typeof o1) {
    case UNDEF:
    case BOOL:
    case NUMBER:
    case STRING:
    case SYMBOL:
      return o1 === o2;

    case OBJECT:
      const arr1 = Object.entries(o1);
      const arr2 = Object.entries(o2);
      if (arr1.length !== arr2.length) return false;

      return arr1.every( (o, i) => {
        if (o[0] !== arr2[i][0]) return false;
        return checkDeepEquals(o[1], arr2[i][1]);
      });

    default:
      console.log('should not be here');
      break;
    }
  }
  return checkDeepEquals(obj1, obj2);
}

const johnA = {
  name: 'John',
  address: {
    line1: '321 Anytown',
    line2: 'Stoke-on-Trent'
  }
};

const johnB = {
  name: 'John',
  address: {
    line1: '321 Anytown',
    line2: 'Stoke-on-Trent'
  }
};

const johnC = {
  name: 'John Charles',
  address: {
    line1: '321 Anytown',
    line2: 'Stoke-on-Trent'
  }
};

console.log(deepEquals(johnA, johnB)); // true  
console.log(deepEquals(johnA, johnC)); // false;
