/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const lowerStr = str.toLowerCase();

  const vowels = 'aeiou';

  const vowelCount = lowerStr.split('').reduce((count, char) => {
    if (vowels.includes(char)) {
      count += 1;
    }
    return count;
  }, 0);

  return vowelCount;
}

module.exports = countVowels;
