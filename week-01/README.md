# Week 1 Assignments

## Easy

### Q1.Anagrams

```js
function isAnagram(str1, str2) {
  let sortedStr1 = str1.toLowerCase().split('').sort().join('');
  let sortedStr2 = str2.toLowerCase().split('').sort().join('');
  if (sortedStr1 === sortedStr2) {
    return true;
  } else {
    return false;
  }
}
```

The `isAnagram` function checks if two input strings (`str1` and `str2`) are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Here's how the function works:

- Convert the input strings to lowercase, split them into arrays so that we can sort them, and then join them back into strings.
- Compare the two strings and return `true` if they are anagrams of each other, and `false` if they are not.

## Testing

1. Follow the comment above each problem to run test for that problem
2. To tests for all the problems of this week run `npx jest ./tests/`

## Development Setup

1. If you have Node.js locally, you should run these on your machine
2. If you don't, you can copy these over to repl.it and run it there. Tests wont be automated there so you will have to make use judgement to ensure if your code is correct
