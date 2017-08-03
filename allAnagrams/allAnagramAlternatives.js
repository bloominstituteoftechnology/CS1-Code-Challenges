// Recursive:
const allAnagrams = (str, start = '') => {
  if (str.length === 1) return [start + str];
  const anagrams = [];

  for (let i = 0; i < str.length; i++) {
    const result = allAnagrams(str.substr(0, i) + str.substr(i + 1), str[i]);
    for (let j = 0; j < result.length; j++) {
      anagrams.push(start + result[j]);
    }
  }
  return anagrams;
};

// Depth First Search, turning string into tree:
class Anagram {
  constructor(string, letter = null) {
    this.string = string;
    this.letter = letter;
    this.children = [];
    this.answer = [];
    this.divide();
    this.produce();
  }

  divide() {
    const arr = this.string.split('');
    arr.forEach(l => {
      const rest = arr.filter(x => x !== l).join('');
      const anagram = new Anagram(rest, l);
      this.children.push(anagram);
    });
  }

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

function allAnagrams(s) {
  return (new Anagram(s)).answer;
}

const anagrams = allAnagrams('abcdefghi');
console.log(anagrams);

// JS implementation of Heap's Permutation Algorithm, also using generator:
var swap = function (array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
};

var heapsPermute = function (array, output, n) {
  n = n || array.length; // set n default to array.length
  if (n === 1) {
    output(array);
  } else {
    for (var i = 1; i <= n; i += 1) {
      heapsPermute(array, output, n - 1);
      if (n % 2) {
        var j = 1;
      } else {
        var j = i;
      }
      swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
    }
  }
};
https://gist.github.com/dsernst/2570de0dc7d44a8cbbd0
