// React useRef Hook

// The useRef Hook allows you to persist values between renders.

// It can be used to store a mutable value that does not cause a re-render when updated.

// It can be used to access a DOM element directly.

// DOES NOT CAUSE RE-RENDERS

// If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

// To avoid this, we can use the useRef Hook.

// Example:
// Use useRef to track application renders.

import { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <p>Type in the input field:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);

// useRef() only returns one item. It returns an Object called current.

// When we initialize useRef we set the initial value: useRef(0).

// IT'S LIKE DOING THIS: CONST COUNT = {CURRENT: 0}. WE CAN ACCESS THE COUNT BY USING COUNT.CURRENT.


// ACCESSING DOM ELEMENTS

// The useRef Hook is often used to access DOM elements directly.

// First, we create a ref using the useRef Hook: const inputElement = useRef();.

// Then, we attach the ref to a DOM element using the ref attribute in JSX: <input type="text" ref={inputElement} />.

// Finally, we can access the DOM element using the current property: inputElement.current.

// Example:
// Use useRef to focus the input:

import { useRef } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);

// In the example, the input field gets focus when the button is clicked, because the onClick function calls inputElement.current.focus().


// TRACKING STATE CHANGES

// The useRef Hook can also be used to keep track of previous state values.

// This is because we are able to persist useRef values between renders.

// Example:
// Use useRef to keep track of previous state values:

import { useRef, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);

// This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.

// In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.