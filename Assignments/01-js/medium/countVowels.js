/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const str1 = str.toLowerCase();
  let ans = 0;
  for (const char of str1) {
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
      ans++;
  }
  return ans;
}

module.exports = countVowels;
