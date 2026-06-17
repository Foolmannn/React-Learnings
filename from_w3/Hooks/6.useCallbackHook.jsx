// REACT USECALLBACK HOOK


// The useCallback Hook is used to memoize a callback function.

// Memoizing a function means caching the result of a function so that it does not need to be recalculated.

// The useCallback function only re-executes when one of its dependencies changes value.

// This allows us to isolate resource intensive functions so that they will not automatically run on every render.

// The useCallback and useMemo Hooks are similar:

    // USEMEMO RETURNS A MEMOIZED VALUE.

    // USECALLBACK RETURNS A MEMOIZED FUNCTION.


// SYNTAX
// The useCallback Hook accepts two arguments.

        useCallback(callback, dependencies)
// callback: The function that you want to memoize.

// dependencies: An array of dependencies for the callback function. The memoized callback will only change if one of these dependencies has changed.

// Example:
// Without useCallback:
//Without useCallback:
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// Child component that receives a function prop
const Button = React.memo(({ onClick, text }) => {
  alert(`Child ${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

// Parent component without useCallback
function WithoutCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // This function is recreated on every render
  const handleClick1 = () => {
    setCount1(count1 + 1);
  };

  const handleClick2 = () => {
    setCount2(count2 + 1);
  };

  alert("Parent rendered");
  return (
    <div>
      <h2>Without useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <WithoutCallbackExample />
);  

// Try running the example above and click the buttons.

// You will notice that all three components (Parent, Button 1 and Button 2) re-render each time you click the buttons.

// This can be avoided by using the useCallback hook.

// By using the useCallback hook, we can memoize the functions and only recreate them when their dependencies change.

// When clicking Button 1, only Parent and Button 1 should re-render, and when clicking Button 2, only Parent and Button 2 should re-render:

// Example:
// With useCallback:
//With useCallback:
import React, { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

// Child component that receives a function prop
const Button = React.memo(({ onClick, text }) => {
  console.log(`${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

// Parent component with useCallback
function WithCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // These functions are memoized and only recreated when dependencies change
  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  console.log("Parent rendered");
  return (
    <div>
      <h2>With useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <WithCallbackExample />
);  