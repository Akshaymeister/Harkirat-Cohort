/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s = str.toLowerCase();
  s = s.replace(/[^\w]|_/g, "");
  let reversed = [...s].reverse().join("");
  if (s === reversed) return true;
  return false;
}

module.exports = isPalindrome;
