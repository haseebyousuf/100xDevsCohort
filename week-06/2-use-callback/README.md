# useCallback() ASSIGNMENT SOLUTIONS

## [Assignment 1](./src/components/Assignment1.jsx)

```jsx
// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.
import { useCallback, useState } from 'react';

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = ({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
);
```

## [Assignment 2](./src/components/Assignment2.jsx)

```jsx
// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immediately.

import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

export function Assignment2() {
  const [inputText, setInputText] = useState('');

  // Your code starts here
  const showAlertCallback = useCallback(() => {
    alert(inputText);
  }, [inputText]);
  // Your code ends here

  return (
    <div>
      <input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Enter some text'
      />
      <Alert showAlert={showAlertCallback} />
    </div>
  );
}

function Alert({ showAlert }) {
  return <button onClick={showAlert}>Show Alert</button>;
}

Alert.propTypes = {
  showAlert: PropTypes.func.isRequired,
};
```
