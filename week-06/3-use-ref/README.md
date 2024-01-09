# useRef() ASSIGNMENT SOLUTIONS

## [Assignment 1](./src/components/Assignment1.jsx)

```jsx
// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

import { useEffect, useRef } from 'react';

export function Assignment1() {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleButtonClick = () => {
    ref.current.focus();
  };

  return (
    <div>
      <input ref={ref} type='text' placeholder='Enter text here' />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
```

## [Assignment 2](./src/components/Assignment2.jsx)

```jsx
// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.
import { useState, useRef } from 'react';
// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const [, forceRender] = useState(0);
  //rendered count value will persist across renders and will not cause any re-renders
  const renderedCount = useRef(0);
  //updating render count
  renderedCount.current++;
  const handleReRender = () => {
    // Update state to force re-render
    forceRender(Math.random());
  };

  return (
    <div>
      <p>This component has rendered {renderedCount.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
```
