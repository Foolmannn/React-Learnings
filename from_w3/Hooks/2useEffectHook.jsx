// REACT USEEFFECT HOOKS


// The useEffect Hook allows you to perform side effects in your components.

// Some examples of side effects are: fetching data, directly updating the DOM, and timers.

// useEffect accepts two arguments. The second argument is optional.

// useEffect(<function>, <dependency>)

// Let's use a timer as an example.

// Example:
// Use setTimeout() to count 1 second after initial render:
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Timer() {
  const [count, setCount] = useState(0);

useEffect(()=>{
    setTimeout(()=>
        setCount((count)=>count+1),1000);
})

  return <h1>I've rendered {count} times!</h1>;
}

createRoot(document.getElementById('root')).render(
  <Timer />
);

// But wait!! It keeps counting even though it should only count once!

// USEEFFECT RUNS ON EVERY RENDER. THAT MEANS THAT WHEN THE COUNT CHANGES, A RENDER HAPPENS, WHICH THEN TRIGGERS ANOTHER EFFECT.

// This is not what we want. There are several ways to control when side effects run.

// We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

// Example
// 1. No dependency passed:
// Example
// 2. An empty array:
// Example
// 3. Props or state values:

// So, to fix this issue, let's only run this effect on the initial render.

// Example:
// Only run the effect on the initial render:

// Example:
// Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:

// If there are multiple dependencies, they should be included in the useEffect dependency array.

// Effect Cleanup
// Some effects require cleanup to reduce memory leaks.

// Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

// We do this by including a return function at the end of the useEffect Hook.

// Example:
// Clean up the timer at the end of the useEffect Hook:

// Note: To clear the timer, we had to name it.