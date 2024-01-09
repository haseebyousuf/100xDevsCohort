# useMemo() ASSIGNMENT SOLUTIONS

## [Assignment 1](./src/components/Assignment1.jsx)

```jsx
// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.
import { useMemo, useState } from 'react';

function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else return num * factorial(num - 1);
}
export function Assignment1() {
  const [input, setInput] = useState(0);
  // Your solution starts here
  const expensiveValue = useMemo(() => factorial(input), [input]);
  // Your solution ends here
  return (
    <div>
      <input
        type='number'
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
```

## [Assignment 2](./src/components/Assignment2.jsx)

```jsx
// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

import { useMemo, useState } from 'react';

const words = ['hi', 'my', 'name', 'is', 'for', 'to', 'random', 'word'];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = '';
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(words.length * Math.random())];
    sentence += ' ';
  }
  ALL_WORDS.push(sentence);
}

export function Assignment2() {
  const [sentences, setSentences] = useState(ALL_WORDS);
  const [filter, setFilter] = useState('');

  const filteredSentences = useMemo(() => {
    return sentences.filter((x) => x.includes(filter));
  }, [filter, sentences]);

  return (
    <div>
      <input
        type='text'
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      ></input>
      {filteredSentences.map((word) => (
        <div key={word}>{word}</div>
      ))}
    </div>
  );
}
```

## [Assignment 3](./src/components/Assignment3.jsx)

```jsx
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

import { useState, useMemo } from 'react';
const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: 'Chocolates', value: 10 },
    { name: 'Chips', value: 20 },
    { name: 'Onion', value: 30 },
    { name: 'Tomato', value: 30 },
    { name: 'Ketchup', value: 10 },
    { name: 'Watch', value: 150 },
    { name: 'Tomato', value: 30 },
    // Add more items as needed
  ]);

  // Your code starts here
  const totalValue = useMemo(
    () => items.reduce((acc, item) => acc + item.value, 0),
    [items]
  );
  // Your code ends here

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: ${totalValue}</p>
    </div>
  );
};

export default Assignment3;
```
