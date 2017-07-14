function isPalindrome(str) {
  // return true if string is a palindrome.
  // otherwise return false
  for (let i = 0; i < str.length / 2; i++) { // <--- make sure divided by 2 handles odd and even length (floor vs. ceiling)
    if (str[i] === str[-1 - i]) {
      retrun true;
    } else {
      return false;
    }
  }
}
