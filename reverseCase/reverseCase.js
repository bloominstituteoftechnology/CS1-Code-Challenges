/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */


const reverseString = (str) => {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      newString += str.charAt(i).toLowerCase();
    } else {
      newString += str.charAt(i).toUpperCase();
    }
  }
  return newString;
};

console.log(reverseString('Hello World'));
console.log(reverseString('Hello World My NamE is LAtoyYa SmitH'));


/*
The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. The first 128 Unicode code points are a direct match of the ASCII character encoding

/*
ASCII UPPERCASE CHARACTERS and VALUE
"65": "A",  "66": "B",  "67": "C",  "68": "D",  "69": "E",    "70": "F",  "71": "G",  "72": "H",  "73": "I",  "74": "J",    "75": "K",  "76": "L",  "77": "M",  "78": "N",  "79": "O",    "80": "P",  "81": "Q",  "82": "R",  "83": "S",  "84": "T",    "85": "U",  "86": "V",  "87": "W",  "88": "X",  "89": "Y",    "90": "Z",
*/

/*
ASCII LOWERCASE CHARACTERS and VALUE
"97": "a",   "98": "b",   "99": "c",   "100": "d",  "101": "e",    "102": "f",  "103": "g",  "104": "h",  "105": "i",  "106": "j",    "107": "k",  "108": "l",  "109": "m",  "110": "n",  "111": "o",    "112": "p",  "113": "q",  "114": "r",  "115": "s",  "116": "t",    "117": "u",  "118": "v",  "119": "w",  "120": "x",  "121": "y",    "122": "z"
*/