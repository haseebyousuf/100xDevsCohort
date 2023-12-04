# Week 1 Assignments

## Easy

### Q1.Anagrams

Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
What's Anagram?
A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

```js
function isAnagram(str1, str2) {
  let sortedStr1 = str1.toLowerCase().split('').sort().join('');
  let sortedStr2 = str2.toLowerCase().split('').sort().join('');
  return sortedStr1 === sortedStr2;
}
```

Here's how the function works:

- Convert the input strings to lowercase, split them into arrays so that we can sort them, and then join them back into strings.
- Compare the two strings and return `true` if they are anagrams of each other, and `false` if they are not.

### Q2. Expenditure Analysis

Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
and return a list of objects where each object is unique category-wise and has total price spent as its value.
Transaction - an object like { itemName, category, price, timestamp }.
Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

```js
function calculateTotalSpentByCategory(transactions) {
  const result = transactions.reduce((acc, transaction) => {
    const { category, price } = transaction;

    // Check if the category already exists in the accumulator
    const existingCategory = acc.find((item) => item.category === category);

    if (existingCategory) {
      // If the category exists, update the total spent
      existingCategory.totalSpent += price;
    } else {
      // If the category doesn't exist, add a new entry
      acc.push({ category, totalSpent: price });
      console.log(acc);
    }

    return acc;
  }, []);
```

The `isAnagram` function checks if two input strings (`str1` and `str2`) are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Here's how the function works:

- Convert the input strings to lowercase, split them into arrays so that we can sort them, and then join them back into strings.
- Compare the two strings and return `true` if they are anagrams of each other, and `false` if they are not.

### Q3.Find Largest Element

```js
function findLargestElement(numbers) {
  if (numbers.length === 0) return undefined;
  let largestElement = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestElement) {
      largestElement = numbers[i];
    }
  }
  return largestElement;
}
```

## Medium

### Q1.Count Vowels

Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

```js
function countVowels(str) {
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
```

### Q2. Palindrome

Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

```js
function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  //remove spaces and punctuations
  const cleanStr = lowerStr.replace(/[^a-z0-9]/g, '');
  //reverse the cleaned string
  const reversedStr = cleanStr.split('').reverse().join('');
  //compare the cleaned string and reversed string
  return cleanStr === reversedStr;
}
```

### Q2. Times

Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for

1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000

```js
function calculateTime(n) {
  let startTime = Date.now();
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  const endTime = Date.now();
  console.log((endTime - startTime) / 1000);
}
```

## Testing

1. Follow the comment above each problem to run test for that problem
2. To tests for all the problems of this week run `npx jest ./tests/`

## Development Setup

1. If you have Node.js locally, you should run these on your machine
2. If you don't, you can copy these over to repl.it and run it there. Tests wont be automated there so you will have to make use judgement to ensure if your code is correct
