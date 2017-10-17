/*
 * Write a function called sortString that returns a passed string with letters in alphabetical order.
 * Expected Input => Output
 * ------------------------
 * 'dcba' => 'abcd'
 * 'zycxbwa' => 'abcwxyz'
 */

function sortString(str) {
  const strArr = Array.from(str);
  const N = strArr.length;
  for (let i = 0; i < N; i++) {
    for (let j = i; j > 0; j--) {
      if (strArr[j] < strArr[j-1]) [strArr[j-1], strArr[j]] = [strArr[j], strArr[j-1]];
    }
  }
  return strArr.join('');
}

console.log(sortString('dcba'));
console.log(sortString('zycxbwa'));
